import { HeroV2 } from '@/components/hero/HeroV2';
import { FeaturedWriting } from '@/components/home/FeaturedWriting';
import { getDictionary, Locale } from '@/lib/i18n';
import { getLocalizedConfig } from '@/lib/config-i18n';
import { getPublicPostsData } from '@/lib/posts';

const SERIES = ['AI 工程化', '系统设计', '独立开发落地'] as const;

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  const { profile } = getLocalizedConfig(params.lang);
  const allArticles = getPublicPostsData();
  const featured = allArticles.filter((a) => a.featured);
  const homepageArticles = (featured.length > 0 ? featured : allArticles).slice(0, 6);
  const isZh = params.lang === 'zh';
  const explorations = isZh
    ? [
        {
          label: '01',
          title: 'AI 践行',
          description: '以 build in public 的方式，把 Agent、RAG、工具调用和内容工作流放进日常实践里验证。',
        },
        {
          label: '02',
          title: '独立开发',
          description: '围绕独立产品开发，持续练习从选题、MVP、上线到分发的完整链路。',
        },
        {
          label: '03',
          title: '系统设计迁移',
          description: '把企业级系统里学到的可靠性、成本、边界和演进思维，迁移到 AI 应用里。',
        },
      ]
    : [
        {
          label: '01',
          title: 'AI Practice',
          description: 'Building in public while testing agents, RAG, tool use, and content workflows in daily practice.',
        },
        {
          label: '02',
          title: 'Indie Building',
          description: 'Practicing the full loop of indie product development: idea, MVP, launch, iteration, and distribution.',
        },
        {
          label: '03',
          title: 'Systems Thinking',
          description: 'Transferring reliability, cost, boundaries, and evolution from enterprise systems into AI apps.',
        },
      ];

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroV2 lang={params.lang} dict={dict} profile={profile} />

      {/* Featured Writing Section */}
      <FeaturedWriting lang={params.lang} articles={homepageArticles} />

      {/* Exploration */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              {isZh ? 'CURRENT EXPLORATION' : 'CURRENT EXPLORATION'}
            </div>
            <h2 className="font-display text-3xl font-medium text-text-primary md:text-4xl">
              {isZh ? '我正在持续构建的能力边界' : 'The capability edge I am building'}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
              {isZh
                ? '我关心的不是“AI 很强”这个结论，而是一个工程师如何用 AI 扩展自己的创造力、产品判断和交付半径。'
                : 'I care less about saying AI is powerful, and more about how an engineer can use it to extend creativity, product judgment, and delivery range.'}
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            {explorations.map((item) => (
              <div key={item.label} className="bg-background p-8">
                <div className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {item.label}
                </div>
                <h3 className="mb-4 font-display text-2xl font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing tracks */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-14 flex items-center gap-6">
            <h2 className="whitespace-nowrap font-display text-3xl font-medium">
              {isZh ? '我如何思考 AI 落地' : 'How I Think About AI Delivery'}
            </h2>
            <div className="section-rule" />
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            {SERIES.map((series) => (
              <div key={series} className="bg-background p-8">
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                  TRACK
                </div>
                <h3 className="mb-3 font-display text-xl font-medium text-text-primary">
                  {isZh
                    ? series
                    : series === 'AI 工程化'
                      ? 'AI Engineering'
                      : series === '系统设计'
                        ? 'Systems Design'
                        : 'Indie Shipping'}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                  {isZh
                    ? series === 'AI 工程化'
                      ? '评估、成本、可靠性、上线策略。把“能跑”变成“能用”。'
                      : series === '系统设计'
                        ? '边界、权衡、演进路径。用架构处理复杂性，而不是堆人。'
                        : '从 0 到 1：选题、MVP、上线、迭代与分发。写给真的要做的人。'
                    : series === 'AI 工程化'
                      ? 'Evaluation, cost, reliability, and shipping strategies.'
                      : series === '系统设计'
                        ? 'Boundaries, trade-offs, and architecture evolution.'
                        : 'From 0→1: MVP, shipping, iteration, and distribution.'}
                </p>
                <a href={`/${params.lang}/blog`} className="accent-link text-sm text-accent">
                  {params.lang === 'zh' ? '去博客里看 →' : 'Go to blog →'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boundary CTA */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-none border border-border bg-surface px-8 py-12">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              {isZh ? 'BUILD IN PUBLIC' : 'BUILD IN PUBLIC'}
            </div>
            <h2 className="mb-4 font-display text-3xl font-medium">
              {isZh ? '先把过程公开，把边界练出来' : 'Make the process visible, then expand the boundary'}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
              {isZh
                ? '文章和项目都会慢慢打磨后再开放。现阶段我先保留欢迎文章，把长期方向讲清楚，再逐步公开 AI 践行、独立开发和产品化过程。'
                : 'Writing and projects will be published after they are polished. For now, I keep the welcome post public and gradually open my AI practice, indie building, and productization process.'}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={`/${params.lang}/blog/welcome-to-my-blog`} className="btn-accent">
                {isZh ? '阅读欢迎文章 →' : 'Read the welcome post →'}
              </a>
              <a href={`/${params.lang}/about`} className="btn-ghost">
                {isZh ? '了解背景 →' : 'About me →'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
