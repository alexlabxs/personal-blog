import { HeroV2 } from '@/components/hero/HeroV2';
import { FeaturedWriting } from '@/components/home/FeaturedWriting';
import { getDictionary, Locale } from '@/lib/i18n';
import { getLocalizedConfig } from '@/lib/config-i18n';
import { getSortedPostsData } from '@/lib/posts';

const REAL_ARTICLE_SLUGS = ['welcome-to-my-blog'];

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  const { profile } = getLocalizedConfig(params.lang);
  const allArticles = getSortedPostsData().slice(0, 6);
  const realArticles = allArticles.filter((a) => REAL_ARTICLE_SLUGS.includes(a.slug));

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroV2 lang={params.lang} dict={dict} profile={profile} />

      {/* Featured Writing Section */}
      <FeaturedWriting lang={params.lang} articles={realArticles} />

      {/* 内容准备中提示 */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-none border border-border bg-surface py-16 text-center">
            <div className="mx-auto max-w-2xl space-y-4">
              <h3 className="font-display text-xl font-medium text-text-primary">
                {params.lang === 'zh' ? '📝 深度内容准备中' : '📝 Deep Content Coming Soon'}
              </h3>
              <p className="text-text-secondary">
                {params.lang === 'zh'
                  ? '第一篇深度文章正在撰写中，主题：AI 应用的架构模式演进'
                  : 'First deep article in progress. Topic: Evolution of AI Application Architecture Patterns'}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                <a href={`/${params.lang}/blog`} className="accent-link text-sm text-accent">
                  {params.lang === 'zh' ? '查看所有文章 →' : 'View all articles →'}
                </a>
                <span className="hidden text-text-subtle sm:inline">|</span>
                <span className="text-sm text-text-muted">
                  {params.lang === 'zh'
                    ? '订阅 Newsletter，第一时间获取更新'
                    : 'Subscribe to get updates'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 font-display text-3xl font-medium">
            {params.lang === 'zh' ? '关于我' : 'About Me'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-text-secondary">
              {params.lang === 'zh'
                ? '我是一名全栈工程师，专注于系统设计。在 AI 时代，我在思考如何让 AI 从实验室走向生产环境，如何设计真正创造价值的 AI 系统。欢迎一起探索这些问题。'
                : "I'm a full-stack engineer focused on systems design. In the AI era, I'm exploring how to make AI production-ready and how to design AI systems that truly create value. Let's explore these questions together."}
            </p>
          </div>
          <div className="mt-6">
            <a href={`/${params.lang}/about`} className="accent-link text-sm text-accent">
              {params.lang === 'zh' ? '了解更多 →' : 'Learn More →'}
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-center font-display text-3xl font-medium">
            {params.lang === 'zh' ? '订阅我的思考' : 'Subscribe to My Thinking'}
          </h2>
          <p className="mb-8 text-center text-text-secondary">
            {params.lang === 'zh'
              ? '获取最新的 AI 工程化和系统设计思考，直接发送到你的邮箱。'
              : 'Get the latest thinking on AI engineering and systems design, delivered to your inbox.'}
          </p>
          <form className="mx-auto max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={params.lang === 'zh' ? '你的邮箱地址' : 'your@email.com'}
                className="flex-1 border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none"
              />
              <button type="submit" className="btn-accent">
                {params.lang === 'zh' ? '订阅' : 'Subscribe'}
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-xs text-text-muted">
            {params.lang === 'zh'
              ? '没有垃圾邮件，随时可以退订。'
              : 'No spam, unsubscribe anytime.'}
          </p>
        </div>
      </section>
    </main>
  );
}
