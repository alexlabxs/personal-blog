import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { generateAboutMetadata } from '@/lib/seo/metadata';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateAboutMetadata(params.lang);
}

export default function AboutPage({ params }: Props) {
  const lang = params.lang;

  return (
    <main className="min-h-screen bg-background px-4 py-20 text-foreground md:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* 开场白 */}
        <section className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              ~/about
            </span>
          </div>

          <h1 className="mb-8 font-display text-4xl font-medium md:text-5xl">
            {lang === 'zh' ? '关于我' : 'About Me'}
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 leading-relaxed text-text-secondary">
            {lang === 'zh' ? (
              <>
                <p>
                  我是 <strong className="text-foreground">Alex（肖凯瀚）</strong>，一名全栈工程师。
                </p>

                <p>
                  过去 10 年，我在保险行业做 Java
                  后端开发，设计过财务系统、记账引擎、费控管理等核心模块。
                  我学会了如何设计复杂的业务系统，如何让代码在生产环境稳定运行。
                </p>

                <p className="pt-4 text-lg font-medium text-foreground">
                  但现在，我在思考一个更大的问题：
                </p>

                <p>AI 时代，系统设计会变得更重要还是更不重要？</p>

                <p>
                  大多数人觉得 AI 会替代工程师。我不这么认为。我认为 AI 让系统设计变得
                  <strong className="text-foreground">更关键</strong>——因为 AI
                  本身就是最难预测、最难驾驭的"组件"。
                </p>

                <p>
                  如何把 AI 集成到生产系统？如何保证可靠性？如何控制成本？
                  这些问题，只有懂系统设计的工程师才能回答。
                </p>

                <p>所以我开始写作，记录我的思考：</p>

                <ul className="list-none space-y-2 pl-0">
                  <li className="text-accent">→ 怎样让 AI 从实验室走向生产环境？</li>
                  <li className="text-accent">→ 系统设计在 AI 时代有什么新挑战？</li>
                  <li className="text-accent">→ 工程师需要补充什么产品思维？</li>
                </ul>

                <p className="text-foreground">欢迎一起探索这些问题。</p>
              </>
            ) : (
              <>
                <p>
                  I'm <strong className="text-foreground">Alex (Xiao Kaihan)</strong>, a full-stack
                  engineer.
                </p>

                <p>
                  For the past 10 years, I've been building Java backend systems in the insurance
                  industry—financial systems, accounting engines, expense control modules. I learned
                  how to design complex business systems and keep code running reliably in
                  production.
                </p>

                <p className="pt-4 text-lg font-medium text-foreground">
                  But now, I'm thinking about a bigger question:
                </p>

                <p>In the AI era, will systems design become more important or less?</p>

                <p>
                  Most people think AI will replace engineers. I disagree. I believe AI makes
                  systems design <strong className="text-foreground">more critical</strong>—because
                  AI itself is the most unpredictable, most difficult "component" to control.
                </p>

                <p>
                  How do we integrate AI into production systems? How do we ensure reliability? How
                  do we control costs? Only engineers who understand systems design can answer these
                  questions.
                </p>

                <p>That's why I write—to document my thinking:</p>

                <ul className="list-none space-y-2 pl-0">
                  <li className="text-accent">→ How to make AI production-ready?</li>
                  <li className="text-accent">
                    → What new challenges does systems design face in the AI era?
                  </li>
                  <li className="text-accent">
                    → What product thinking do engineers need to develop?
                  </li>
                </ul>

                <p className="text-foreground">Let's explore these questions together.</p>
              </>
            )}
          </div>
        </section>

        {/* 经历背景 */}
        <section className="mb-20">
          <h2 className="mb-8 font-display text-2xl font-medium">
            {lang === 'zh' ? '背景' : 'Background'}
          </h2>

          <div className="space-y-6 text-text-secondary">
            <div className="flex gap-4">
              <span className="mt-1 font-mono text-xs text-accent">2019-Now</span>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {lang === 'zh' ? '高级 Java 工程师' : 'Senior Java Engineer'}
                </h3>
                <p className="text-sm">
                  {lang === 'zh'
                    ? '保险行业财务系统核心模块开发、IFRS17 准则重构、LLM 与 OCR 技术集成'
                    : 'Insurance financial systems, IFRS17 refactoring, LLM & OCR integration'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 font-mono text-xs text-accent">2015-2019</span>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {lang === 'zh' ? 'Java 开发工程师' : 'Java Developer'}
                </h3>
                <p className="text-sm">
                  {lang === 'zh'
                    ? '金融行业系统开发、行情数据系统'
                    : 'Financial systems development, market data systems'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="border-t border-border pt-12">
          <h2 className="mb-6 font-display text-2xl font-medium">
            {lang === 'zh' ? '联系我' : 'Contact'}
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-text-muted">
              <span className="font-mono text-xs text-accent">EMAIL</span>
              <a
                href="mailto:dreamkey.xiao@gmail.com"
                className="transition-colors hover:text-accent"
              >
                dreamkey.xiao@gmail.com
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="https://github.com/xiaokaihan"
                target="_blank"
                className="text-text-muted transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href="https://x.com/DreamkeyKey"
                target="_blank"
                className="text-text-muted transition-colors hover:text-accent"
              >
                Twitter
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
