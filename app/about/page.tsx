import { Metadata } from 'next';
import { profile, experiences, skills, socialLinks } from '@/lib/config';
import { SkillCloud } from '@/components/hero/SkillCloud';
import { Timeline } from '@/components/hero/Timeline';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const iconMap = {
  github: FaGithub,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export const metadata: Metadata = {
  title: '关于我',
  description: 'Niuniu - 全栈工程师，5年开发经验。精通 React、Next.js、TypeScript，熟悉 Node.js、Python、Go。热爱从 0 到 1 构建产品，正在探索 AI × Product 的结合。',
  openGraph: {
    title: '关于我 | Niuniu',
    description: '全栈工程师，热爱从 0 到 1 构建产品',
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <div className="font-mono text-terminal-green text-sm mb-4">~/about</div>
          <h1 className="text-4xl font-bold">关于我</h1>
        </div>

        {/* Bio Section */}
        <section className="mb-16 rounded-lg bg-code-bg p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-terminal-green/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-terminal-green">
                {profile.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-gray-400">{profile.role}</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">{profile.bio}</p>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="mb-6 font-mono text-terminal-green text-sm">~/experience</h2>
          <Timeline experiences={experiences} />
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="mb-6 font-mono text-terminal-green text-sm">~/skills</h2>
          <SkillCloud skills={skills} />
        </section>

        {/* Contact Section */}
        <section className="mb-16 rounded-lg bg-code-bg p-8">
          <h2 className="mb-6 font-mono text-terminal-green text-sm">~/contact</h2>
          <p className="mb-6 text-gray-400">
            欢迎通过以下方式联系我，探讨技术合作、产品咨询或工作机会。
          </p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-background px-4 py-2 text-gray-300 transition-colors hover:bg-terminal-dim hover:text-terminal-green"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Email Direct */}
        <section className="rounded-lg border border-terminal-green/30 bg-terminal-dim/10 p-8 text-center">
          <p className="mb-2 font-mono text-gray-400 text-sm">EMAIL</p>
          <a
            href="mailto:contact@niuniu.dev"
            className="text-xl font-bold text-terminal-green hover:underline"
          >
            contact@niuniu.dev
          </a>
        </section>
      </div>
    </main>
  );
}
