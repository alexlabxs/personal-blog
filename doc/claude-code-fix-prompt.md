# Personal Blog 关键问题修复 - Claude Code Prompt

## 🎯 任务概述

网站已完成首次改造，但存在 4 个关键问题需要立即修复。这些问题会影响用户信任和品牌一致性。

**项目**: https://github.com/xiaokaihan/personal-blog
**当前网站**: https://alexlabx.com
**技术栈**: Next.js 14 + App Router + TypeScript + Tailwind CSS

---

## 🔴 问题 1：首页展示假文章（最紧急）

### 当前问题
首页"最新思考"区域显示了 5 篇文章，但只有 1 篇是真实的：
- ❌ "我为什么从 Java 架构师转向 AI Agent 开发" (假)
- ❌ "传统企业最容易落地的 5 个 AI 应用" (假)
- ❌ "用 AI 做我的博客项目 - 第 1 周进度" (假)
- ❌ "AI Agent vs 传统自动化：成本对比分析" (假)
- ✅ "欢迎来到我的博客" (真)

用户点击假文章会 404，严重损害信任。

### 修复方案：改成"内容准备中"状态

**目标文件**: `app/[lang]/page.tsx` 或相关的 Featured Writing 组件

**要做的修改**:

1. **找到 Featured Writing Section** 的代码位置
2. **替换成以下逻辑**:

```tsx
// 在 app/[lang]/page.tsx 中的 Featured Writing Section

<section className="py-20 border-t border-terminal-border">
  <div className="container mx-auto max-w-6xl px-4">
    <h2 className="text-3xl font-bold mb-12">
      {lang === 'zh' ? '最新思考' : 'Latest Thinking'}
    </h2>
    
    {/* 真实文章列表 */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {realArticles.map(article => (
        <ArticleCard key={article.slug} article={article} lang={lang} />
      ))}
    </div>
    
    {/* 内容准备中提示 */}
    <div className="text-center py-16 rounded-lg bg-code-bg/50">
      <div className="max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-semibold text-secondary">
          {lang === 'zh' ? '📝 深度内容准备中' : '📝 Deep Content Coming Soon'}
        </h3>
        
        <p className="text-secondary/70">
          {lang === 'zh' 
            ? '第一篇深度文章正在撰写中，主题：AI 应用的架构模式演进' 
            : 'First deep article in progress. Topic: Evolution of AI Application Architecture Patterns'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a 
            href={`/${lang}/blog`}
            className="text-terminal-green hover:underline text-sm"
          >
            {lang === 'zh' ? '查看所有文章 →' : 'View all articles →'}
          </a>
          
          <span className="text-secondary/40 hidden sm:inline">|</span>
          
          <span className="text-sm text-secondary/60">
            {lang === 'zh' ? '订阅 Newsletter，第一时间获取更新' : 'Subscribe to get updates'}
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**关键点**:
- 只显示真实存在的文章（目前只有 1 篇）
- 明确告诉访客"内容准备中"
- 提供预期：正在写什么主题
- 引导用户订阅 Newsletter

---

## 🟠 问题 2：Blog 页面描述过时

### 当前问题
Blog 页面描述还是旧定位：
> "技术博客，分享 Java 开发经验、微服务架构设计与 AI 落地实践。Spring Boot、分布式事务、财务系统等技术文章。"

这与首页的"AI 时代系统设计工程师"不一致。

### 修复方案

**目标文件**: `app/[lang]/blog/page.tsx`

**找到页面描述部分，替换成**:

```tsx
// 中文版本
const description_zh = "深度思考 AI 时代的系统设计。分享工程实践、架构决策和产品思维。";

// 英文版本  
const description_en = "Deep thinking on systems design in the AI era. Sharing engineering practices, architecture decisions, and product thinking.";
```

**完整的 Blog 页面 header 应该是**:

```tsx
<div className="mb-12">
  <h1 className="text-4xl font-bold mb-4">
    {lang === 'zh' ? '博客' : 'Blog'}
  </h1>
  <p className="text-secondary/70 text-lg">
    {lang === 'zh' 
      ? '深度思考 AI 时代的系统设计。分享工程实践、架构决策和产品思维。'
      : 'Deep thinking on systems design in the AI era. Sharing engineering practices, architecture decisions, and product thinking.'}
  </p>
</div>
```

---

## 🟡 问题 3：About 页面定位冲突

### 当前问题
About 页面还是简历风格：
- 标题："高级 Java 工程师"
- 内容：工作经历、技能标签
- 与首页的"AI 时代系统设计工程师"定位不一致

### 修复方案：重写 About 页面

**目标文件**: `app/[lang]/about/page.tsx`

**完整的新版本 About 页面**:

```tsx
export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang;
  
  return (
    <main className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        
        {/* 开场白 */}
        <section className="mb-20">
          <div className="mb-6">
            <span className="text-sm font-mono text-terminal-green">~/about</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {lang === 'zh' ? '关于我' : 'About Me'}
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-secondary/80 leading-relaxed">
            {lang === 'zh' ? (
              <>
                <p>
                  我是 <strong className="text-foreground">Alex（肖凯瀚）</strong>，一名全栈工程师。
                </p>
                
                <p>
                  过去 10 年，我在保险行业做 Java 后端开发，设计过财务系统、记账引擎、费控管理等核心模块。
                  我学会了如何设计复杂的业务系统，如何让代码在生产环境稳定运行。
                </p>
                
                <p className="text-lg font-medium text-foreground pt-4">
                  但现在，我在思考一个更大的问题：
                </p>
                
                <p>
                  AI 时代，系统设计会变得更重要还是更不重要？
                </p>
                
                <p>
                  大多数人觉得 AI 会替代工程师。我不这么认为。我认为 AI 让系统设计变得<strong className="text-foreground">更关键</strong>——因为 AI 本身就是最难预测、最难驾驭的"组件"。
                </p>
                
                <p>
                  如何把 AI 集成到生产系统？如何保证可靠性？如何控制成本？
                  这些问题，只有懂系统设计的工程师才能回答。
                </p>
                
                <p>
                  所以我开始写作，记录我的思考：
                </p>
                
                <ul className="list-none space-y-2 pl-0">
                  <li>→ 怎样让 AI 从实验室走向生产环境？</li>
                  <li>→ 系统设计在 AI 时代有什么新挑战？</li>
                  <li>→ 工程师需要补充什么产品思维？</li>
                </ul>
                
                <p className="text-foreground">
                  欢迎一起探索这些问题。
                </p>
              </>
            ) : (
              <>
                <p>
                  I'm <strong className="text-foreground">Alex (Xiao Kaihan)</strong>, a full-stack engineer.
                </p>
                
                <p>
                  For the past 10 years, I've been building Java backend systems in the insurance industry—financial systems, accounting engines, expense control modules. I learned how to design complex business systems and keep code running reliably in production.
                </p>
                
                <p className="text-lg font-medium text-foreground pt-4">
                  But now, I'm thinking about a bigger question:
                </p>
                
                <p>
                  In the AI era, will systems design become more important or less?
                </p>
                
                <p>
                  Most people think AI will replace engineers. I disagree. I believe AI makes systems design <strong className="text-foreground">more critical</strong>—because AI itself is the most unpredictable, most difficult "component" to control.
                </p>
                
                <p>
                  How do we integrate AI into production systems? How do we ensure reliability? How do we control costs? Only engineers who understand systems design can answer these questions.
                </p>
                
                <p>
                  That's why I write—to document my thinking:
                </p>
                
                <ul className="list-none space-y-2 pl-0">
                  <li>→ How to make AI production-ready?</li>
                  <li>→ What new challenges does systems design face in the AI era?</li>
                  <li>→ What product thinking do engineers need to develop?</li>
                </ul>
                
                <p className="text-foreground">
                  Let's explore these questions together.
                </p>
              </>
            )}
          </div>
        </section>
        
        {/* 经历背景（精简版）*/}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">
            {lang === 'zh' ? '背景' : 'Background'}
          </h2>
          
          <div className="space-y-6 text-secondary/70">
            <div className="flex gap-4">
              <span className="text-terminal-green font-mono text-sm mt-1">2019-Now</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
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
              <span className="text-terminal-green font-mono text-sm mt-1">2015-2019</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
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
        <section className="border-t border-terminal-border pt-12">
          <h2 className="text-2xl font-bold mb-6">
            {lang === 'zh' ? '联系我' : 'Contact'}
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-3 items-center text-secondary/70">
              <span className="font-mono text-terminal-green">EMAIL</span>
              <a href="mailto:dreamkey.xiao@gmail.com" className="hover:text-terminal-green transition-colors">
                dreamkey.xiao@gmail.com
              </a>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a 
                href="https://github.com/xiaokaihan" 
                target="_blank"
                className="text-secondary/70 hover:text-terminal-green transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://x.com/DreamkeyKey" 
                target="_blank"
                className="text-secondary/70 hover:text-terminal-green transition-colors"
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
```

**关键改动**:
- 用"故事"代替"简历"
- 解释"为什么关注 AI 时代的系统设计"
- 工作经历精简成"背景"部分
- 删除技能标签云（不需要了）

---

## 🔵 问题 4：导航栏有空链接

### 当前问题
导航栏包含"资源"链接，但该页面是空的。

### 修复方案

**目标文件**: `components/Header.tsx` 或 `app/[lang]/layout.tsx` 中的导航配置

**找到导航配置，注释掉"资源"链接**:

```tsx
const navItems = [
  { href: `/${lang}`, label: lang === 'zh' ? '首页' : 'Home' },
  { href: `/${lang}/blog`, label: lang === 'zh' ? '博客' : 'Blog' },
  { href: `/${lang}/projects`, label: lang === 'zh' ? '项目' : 'Projects' },
  // { href: `/${lang}/resources`, label: lang === 'zh' ? '资源' : 'Resources' }, // 暂时隐藏
  { href: `/${lang}/about`, label: lang === 'zh' ? '关于' : 'About' },
];
```

**同时检查 Footer** (components/Footer.tsx)，如果有"资源"链接也注释掉。

---

## 📋 实施步骤总结

### Step 1: 修复首页假文章（最优先）
1. 找到 `app/[lang]/page.tsx` 中的 Featured Writing Section
2. 替换成"内容准备中"的新代码
3. 删除或注释掉假文章数据
4. 测试：访问首页，确认显示"内容准备中"

### Step 2: 更新 Blog 页面描述
1. 打开 `app/[lang]/blog/page.tsx`
2. 找到页面描述文案
3. 替换成新的定位文案
4. 测试：访问 /blog 页面

### Step 3: 重写 About 页面
1. 打开 `app/[lang]/about/page.tsx`
2. 用我提供的完整新版本替换
3. 调整样式（如果需要）
4. 测试：访问 /about 页面

### Step 4: 隐藏资源链接
1. 找到导航配置文件
2. 注释掉"资源"链接
3. 检查 Footer 是否也需要修改
4. 测试：导航栏不再显示"资源"

### Step 5: 全面测试
1. 所有页面都访问一遍
2. 点击所有链接确认可用
3. 移动端测试
4. 确认没有 404 错误

---

## ✅ 验收标准

完成后，网站应该：

1. **首页**
   - ✅ 只显示真实文章（1 篇）
   - ✅ 清楚展示"内容准备中"
   - ✅ 没有假文章
   - ✅ 所有链接都可点击

2. **Blog 页面**
   - ✅ 描述符合新定位
   - ✅ 只显示真实的 1 篇文章

3. **About 页面**
   - ✅ 用故事而不是简历
   - ✅ 解释为什么关注 AI 时代系统设计
   - ✅ 工作经历精简展示

4. **导航**
   - ✅ 没有空页面链接
   - ✅ 所有链接都有效

---

## 🎯 额外建议

### 关于"内容准备中"的文案
你可以更具体地告诉访客你在写什么：

**选项 1**（推荐）:
```
第一篇深度文章正在撰写中
主题：AI 应用的架构模式演进
预计发布：2 周内
```

**选项 2**（更透明）:
```
深度内容准备中

我正在写第一篇文章，主题是"AI 应用的架构模式"。
作为一个追求质量的人，我不想仓促发布。

订阅 Newsletter，第一时间获取更新。
```

### 关于 About 页面
如果你觉得我提供的文案太长，可以精简成：

```
我是 Alex，一名全栈工程师。

过去 10 年做 Java 后端，现在关注 AI 时代的系统设计。

我在思考：如何让 AI 从实验室走向生产环境？
如何设计可靠的 AI 系统？

欢迎一起探索。
```

---

## 🚀 开始执行

请按照上面的步骤，逐个修复这 4 个问题。

**优先级顺序**:
1. 首页假文章（最紧急）
2. Blog 描述（5 分钟）
3. 导航链接（5 分钟）
4. About 页面（需要一些时间）

完成后，你的网站将是**真实、一致、专业**的。

Good luck! 🎉
