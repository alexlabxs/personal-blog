import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projects } from '@/lib/projects';
import { Locale } from '@/lib/i18n';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

type Props = {
  params: {
    lang: Locale;
    slug: string;
  };
};

export async function generateStaticParams() {
  const locales: Locale[] = ['zh', 'en'];
  const params: { lang: Locale; slug: string }[] = [];

  locales.forEach((lang) => {
    projects.forEach((project) => {
      params.push({ lang, slug: project.slug });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexlabx.com';
  const title = params.lang === 'zh' ? `${project.name}（项目复盘）` : `${project.name} (Case Study)`;

  return {
    title,
    description: project.description,
    keywords: project.techStack,
    alternates: {
      canonical: `/${params.lang}/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      url: `${baseUrl}/${params.lang}/projects/${project.slug}`,
      type: 'article',
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const lang = params.lang;
  const posts = getSortedPostsData().filter((p) => p.published);
  const relatedPosts =
    project.caseStudy?.relatedPostSlugs?.length
      ? posts.filter((p) => project.caseStudy?.relatedPostSlugs?.includes(p.slug))
      : [];

  const sectionTitle = (zh: string, en: string) => (lang === 'zh' ? zh : en);

  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          ~/projects/{project.slug}
        </div>

        <h1 className="mb-4 font-display text-4xl font-medium text-text-primary">{project.name}</h1>
        <p className="mb-8 text-text-secondary">{project.description}</p>

        {project.highlights?.length ? (
          <div className="mb-10 flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <span key={h} className="tag-pill">
                {h}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mb-12 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>

        {project.caseStudy ? (
          <div className="space-y-12">
            <section className="border-t border-border pt-10">
              <h2 className="mb-4 font-display text-2xl font-medium">
                {sectionTitle('背景与问题', 'Context')}
              </h2>
              <p className="leading-relaxed text-text-secondary">{project.caseStudy.context}</p>
            </section>

            <section className="border-t border-border pt-10">
              <h2 className="mb-4 font-display text-2xl font-medium">
                {sectionTitle('我做了什么', 'What I Built')}
              </h2>
              <p className="leading-relaxed text-text-secondary">{project.caseStudy.whatBuilt}</p>
            </section>

            {project.caseStudy.architecture?.length ? (
              <section className="border-t border-border pt-10">
                <h2 className="mb-4 font-display text-2xl font-medium">
                  {sectionTitle('架构要点', 'Architecture')}
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-text-secondary">
                  {project.caseStudy.architecture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.caseStudy.keyDecisions?.length ? (
              <section className="border-t border-border pt-10">
                <h2 className="mb-4 font-display text-2xl font-medium">
                  {sectionTitle('关键决策与取舍', 'Key Decisions')}
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-text-secondary">
                  {project.caseStudy.keyDecisions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {(project.caseStudy.metrics?.length || project.caseStudy.costs?.length) ? (
              <section className="border-t border-border pt-10">
                <h2 className="mb-4 font-display text-2xl font-medium">
                  {sectionTitle('指标 / 成本', 'Metrics / Cost')}
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {project.caseStudy.metrics?.length ? (
                    <div className="editorial-card p-6">
                      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                        METRICS
                      </h3>
                      <ul className="list-disc space-y-2 pl-5 text-text-secondary">
                        {project.caseStudy.metrics.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {project.caseStudy.costs?.length ? (
                    <div className="editorial-card p-6">
                      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                        COST
                      </h3>
                      <ul className="list-disc space-y-2 pl-5 text-text-secondary">
                        {project.caseStudy.costs.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}

            {project.caseStudy.lessons?.length ? (
              <section className="border-t border-border pt-10">
                <h2 className="mb-4 font-display text-2xl font-medium">
                  {sectionTitle('复盘', 'Lessons')}
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-text-secondary">
                  {project.caseStudy.lessons.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {relatedPosts.length ? (
              <section className="border-t border-border pt-10">
                <h2 className="mb-4 font-display text-2xl font-medium">
                  {sectionTitle('相关文章', 'Related Posts')}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${lang}/blog/${p.slug}`}
                      className="editorial-card p-6 transition-colors hover:border-accent-dim"
                    >
                      {p.series ? <div className="mb-3"><span className="tag-pill">{p.series}</span></div> : null}
                      <div className="mb-2 font-display text-xl font-medium text-text-primary">{p.title}</div>
                      <div className="text-sm text-text-secondary">{p.description}</div>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        ) : (
          <div className="border-t border-border pt-10 text-text-secondary">
            {lang === 'zh' ? '该项目复盘内容正在补充中。' : 'Case study content is being prepared.'}
          </div>
        )}

        <div className="mt-14 border-t border-border pt-10">
          <a href={`/${lang}/projects`} className="accent-link text-sm text-accent">
            {lang === 'zh' ? '← 返回项目列表' : '← Back to projects'}
          </a>
        </div>
      </div>
    </main>
  );
}

