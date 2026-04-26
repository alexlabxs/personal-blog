import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/i18n';
import { getLocalizedConfig, socialLinks } from '@/lib/config-i18n';
import { SkillCloud } from '@/components/hero/SkillCloud';
import { Timeline } from '@/components/hero/Timeline';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { generateAboutMetadata } from '@/lib/seo/metadata';

const iconMap = {
  github: FaGithub,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateAboutMetadata(params.lang);
}

export default async function AboutPage({ params }: Props) {
  const dict = await getDictionary(params.lang);
  const { profile, experiences, skills } = getLocalizedConfig(params.lang);

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-20 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* 开场白 */}
        <section className="mb-20">
          <h1 className="mb-6 text-4xl font-bold">
            {params.lang === 'zh' ? '关于我' : 'About Me'}
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-secondary/80 leading-relaxed mb-6">
              {params.lang === 'zh'
                ? '我是一名全栈工程师，专注于系统设计。在 AI 时代，我在思考如何让 AI 从实验室走向生产环境，如何设计真正创造价值的 AI 系统。'
                : 'I\'m a full-stack engineer focused on systems design. In the AI era, I\'m exploring how to make AI production-ready and how to design AI systems that truly create value.'
              }
            </p>
            <p className="text-lg text-secondary/80 leading-relaxed">
              {params.lang === 'zh'
                ? '拥有 10+ 年软件开发经验，曾在保险财务系统构建复杂的分布式架构。现在，我将这些系统设计的经验应用到 AI 工程化领域，帮助企业实现 AI 应用的落地。'
                : 'With 10+ years of software development experience, I\'ve built complex distributed architectures for insurance financial systems. Now, I\'m applying this systems design expertise to AI engineering, helping enterprises bring AI applications to production.'
              }
            </p>
          </div>
        </section>

        {/* 为什么听我的 */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold">
            {params.lang === 'zh' ? '为什么我的观点值得听' : 'Why My Perspective Matters'}
          </h2>
          <div className="space-y-6 text-secondary/80">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-terminal-green/20 flex items-center justify-center text-terminal-green font-bold">1</div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {params.lang === 'zh' ? '实战经验 + 理论深度' : 'Practical Experience + Theoretical Depth'}
                </h3>
                <p>
                  {params.lang === 'zh'
                    ? '不仅是技术实现，更关注架构设计和业务价值。从金融系统到 AI 应用，我对系统设计有深入理解。'
                    : 'Not just technical implementation, but focused on architecture design and business value. From financial systems to AI applications, I have deep understanding of systems design.'
                  }
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-terminal-green/20 flex items-center justify-center text-terminal-green font-bold">2</div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {params.lang === 'zh' ? '产品思维 + 技术视野' : 'Product Thinking + Technical Vision'}
                </h3>
                <p>
                  {params.lang === 'zh'
                    ? '技术为产品服务。我关注如何用 AI 解决真实问题，创造可衡量的价值。'
                    : 'Technology serves the product. I focus on using AI to solve real problems and create measurable value.'
                  }
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-terminal-green/20 flex items-center justify-center text-terminal-green font-bold">3</div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {params.lang === 'zh' ? '跨领域思考' : 'Cross-Disciplinary Thinking'}
                </h3>
                <p>
                  {params.lang === 'zh'
                    ? '结合分布式系统、产品设计和 AI 工程化，提供更全面的视角。'
                    : 'Combining distributed systems, product design, and AI engineering to provide a more comprehensive perspective.'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 工作经历 */}
        <section className="mb-20">
          <h2 className="mb-6 font-mono text-terminal-green text-sm">~/experience</h2>
          <Timeline experiences={experiences} />
        </section>

        {/* 技能 */}
        <section className="mb-20">
          <h2 className="mb-6 font-mono text-terminal-green text-sm">~/skills</h2>
          <SkillCloud skills={skills} />
        </section>

        {/* 联系方式 */}
        <section>
          <h2 className="mb-6 font-mono text-terminal-green text-sm">
            {params.lang === 'zh' ? '联系' : 'Contact'}
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:dreamkey.xiao@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-code-bg px-6 py-3 text-secondary transition-colors hover:bg-code-bg/80 hover:text-terminal-green"
            >
              <FaEnvelope className="h-5 w-5" />
              <span>Email</span>
            </a>
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-code-bg px-6 py-3 text-secondary transition-colors hover:bg-code-bg/80 hover:text-terminal-green"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
