import { HeroV2 } from '@/components/hero/HeroV2';
import { FeaturedWriting } from '@/components/home/FeaturedWriting';
import { getDictionary, Locale } from '@/lib/i18n';
import { getLocalizedConfig } from '@/lib/config-i18n';
import { getSortedPostsData } from '@/lib/posts';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  const { profile } = getLocalizedConfig(params.lang);
  const articles = getSortedPostsData().slice(0, 6); // 取前6篇文章

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Hero Section */}
      <HeroV2 lang={params.lang} dict={dict} profile={profile} />

      {/* Featured Writing Section */}
      <FeaturedWriting lang={params.lang} articles={articles} />

      {/* Brief About Section */}
      <section className="border-t border-terminal-border py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-6">
            {params.lang === 'zh' ? '关于我' : 'About Me'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-secondary/80 leading-relaxed">
              {params.lang === 'zh'
                ? '我是一名全栈工程师，专注于系统设计。在 AI 时代，我在思考如何让 AI 从实验室走向生产环境，如何设计真正创造价值的 AI 系统。欢迎一起探索这些问题。'
                : 'I\'m a full-stack engineer focused on systems design. In the AI era, I\'m exploring how to make AI production-ready and how to design AI systems that truly create value. Let\'s explore these questions together.'
              }
            </p>
          </div>
          <div className="mt-6">
            <a
              href={`/${params.lang}/about`}
              className="inline-flex items-center text-terminal-green hover:text-terminal-green/80 transition-colors"
            >
              {params.lang === 'zh' ? '了解更多 →' : 'Learn More →'}
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-terminal-border py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {params.lang === 'zh' ? '订阅我的思考' : 'Subscribe to My Thinking'}
          </h2>
          <p className="text-center text-secondary/70 mb-8">
            {params.lang === 'zh'
              ? '获取最新的 AI 工程化和系统设计思考，直接发送到你的邮箱。'
              : 'Get the latest thinking on AI engineering and systems design, delivered to your inbox.'
            }
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={params.lang === 'zh' ? '你的邮箱地址' : 'your@email.com'}
                className="flex-1 px-4 py-3 rounded-lg bg-code-bg text-foreground placeholder:text-secondary/50 border border-terminal-border focus:outline-none focus:border-terminal-green"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-terminal-green text-background font-medium rounded-lg hover:bg-terminal-green/90 transition-colors"
              >
                {params.lang === 'zh' ? '订阅' : 'Subscribe'}
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-secondary/50 mt-4">
            {params.lang === 'zh'
              ? '没有垃圾邮件，随时可以退订。'
              : 'No spam, unsubscribe anytime.'
            }
          </p>
        </div>
      </section>
    </main>
  );
}
