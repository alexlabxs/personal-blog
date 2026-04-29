# Personal Blog 改造项目 - Claude Code Prompt

## 项目概述

这是一个 Next.js 14 (App Router) 个人博客网站的改造项目。需要从"简历式展示"转变为"思想输出平台"，目标受众是对 AI 工程化和系统设计感兴趣的人。

**项目仓库**: https://github.com/xiaokaihan/personal-blog
**当前网站**: https://alexlabx.com
**技术栈**: Next.js 14 + App Router + Tailwind CSS + MDX + Framer Motion + i18n

---

## 🎯 改造目标

### 核心定位转变
- **旧定位**: "AI Agent 开发者 | 全栈工程师" (简历式)
- **新定位**: "AI 时代的系统设计工程师" (思想家式)

### 设计风格选择
- **方案**: 编辑叙事风格 (Editorial + Narrative)
- **背景**: 深色主题
- **特点**: 内容优先、视觉层次丰富、有故事感

### 核心价值主张
"让 AI 从实验室走向生产环境"

---

## 📋 改造清单

### 第一阶段：内容和定位（Day 1-2）

#### 1. 首页 (app/[lang]/page.tsx) 核心改动

**删除以下内容**:
- ❌ 虚假数据统计卡片（"5+ 年经验 / 20+ 项目 / 30+ 文章"）
- ❌ 工作经历 Timeline（移到 About 页）
- ❌ 技能标签云（移到 About 页或删除）
- ❌ 代码块样式的自我介绍（`const me = {...}`）

**新的首页结构**:
```tsx
<main>
  {/* Hero Section - 第一屏 */}
  <section className="hero">
    <h1>AI 时代的系统设计工程师</h1>
    <p className="tagline">让 AI 从实验室走向生产环境</p>
    <p className="bio">
      全栈思维 × AI 工程化。我在思考：怎样才能让 AI 真正为组织创造价值？
      为什么系统设计在 AI 时代变得更重要？
    </p>
    <a href="/blog" className="cta">Read My Thinking →</a>
  </section>

  {/* Featured Writing - 第二屏 */}
  <section className="featured-writing">
    <h2>最新思考</h2>
    {/* 文章卡片 - 即使暂时是占位符 */}
    <div className="articles-grid">
      {/* Article cards */}
    </div>
  </section>

  {/* Brief About - 第三屏 */}
  <section className="brief-about">
    <h2>关于我</h2>
    <p>简短介绍（100-150字）</p>
    <a href="/about">了解更多 →</a>
  </section>

  {/* Newsletter/Connect - 第四屏 */}
  <section className="newsletter">
    <h2>订阅我的思考</h2>
    <form>{/* Email 订阅表单 */}</form>
  </section>
</main>
```

#### 2. 配置文件更新 (lib/config-i18n.ts 或类似文件)

需要修改的文案：

**中文版本**:
```typescript
const config_zh = {
  profile: {
    name: "Alex Xiao",
    role: "AI 时代的系统设计工程师",
    tagline: "让 AI 从实验室走向生产环境",
    bio: "全栈思维 × AI 工程化。我在思考：怎样才能让 AI 真正为组织创造价值？为什么系统设计在 AI 时代变得更重要？欢迎一起探索这些问题。"
  },
  // 删除或注释掉 experiences 和 skills (移到 About 页面)
}
```

**英文版本**:
```typescript
const config_en = {
  profile: {
    name: "Alex (Xiao Kaihan)",
    role: "Systems Design Engineer in AI Era",
    tagline: "Making AI Production-Ready",
    bio: "Full-stack thinking × AI engineering. I explore: How to make AI truly create value? Why systems design matters more in the AI era? Let's think together."
  },
}
```

#### 3. SEO 元数据更新 (lib/seo/metadata.ts)

```typescript
export const siteConfig = {
  title: {
    zh: "Alex — AI 时代的系统设计工程师",
    en: "Alex — Systems Design Engineer in AI Era"
  },
  description: {
    zh: "思考 AI 工程化、系统设计和产品。让 AI 从实验室走向生产环境。",
    en: "Thinking about AI engineering, systems design, and products. Making AI production-ready."
  },
  keywords: {
    zh: "AI工程化, 系统设计, LLM应用, AI Agent, 全栈开发, 产品思维",
    en: "AI Engineering, Systems Design, LLM Applications, AI Agent, Full-stack Development, Product Thinking"
  }
}
```

#### 4. 博客描述更新 (app/[lang]/blog/page.tsx)

修改博客页面的描述：

**旧文案**:
> "技术博客，分享 Java 开发经验、微服务架构设计与 AI 落地实践。"

**新文案（中文）**:
> "深度思考 AI 时代的系统设计。分享工程实践、架构决策和产品思维。"

**新文案（英文）**:
> "Deep thinking on systems design in the AI era. Sharing engineering practices, architecture decisions, and product thinking."

---

### 第二阶段：首页视觉重构（Day 3-4）

#### 5. Hero Section 设计

创建新的 Hero 组件，替换现有的 Typewriter 等组件。

**目标样式特征**:
- 深色背景（保持现有的 `bg-background`）
- 更有层次的视觉效果（渐变、微妙的背景图案）
- 简洁的文字排版（不是代码风格）
- 清晰的 CTA 按钮

**新建文件**: `components/hero/HeroV2.tsx`

```tsx
// 参考方案 2（编辑叙事）的设计
export function HeroV2({ lang, dict, profile }) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* 背景层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
        {/* 微妙的网格或纹理 */}
      </div>
      
      {/* 内容层 */}
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-secondary/60 text-2xl md:text-3xl mb-2">
              {profile.name}
            </span>
            {profile.role}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary/80">
            {profile.tagline}
          </p>
          
          <p className="text-lg text-secondary/70 max-w-2xl leading-relaxed">
            {profile.bio}
          </p>
          
          <div className="pt-4">
            <a 
              href={`/${lang}/blog`}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {dict.cta.readMyThinking} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

#### 6. Featured Writing Section

创建文章预览卡片组件。

**新建文件**: `components/home/FeaturedWriting.tsx`

```tsx
export function FeaturedWriting({ lang, articles }) {
  return (
    <section className="py-20 border-t border-terminal-border">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold mb-12">
          {lang === 'zh' ? '最新思考' : 'Latest Thinking'}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map(article => (
              <ArticleCard key={article.slug} article={article} lang={lang} />
            ))
          ) : (
            // 占位符
            <div className="col-span-full text-center py-12 text-secondary/60">
              <p>{lang === 'zh' ? '内容准备中...' : 'Content coming soon...'}</p>
              <p className="text-sm mt-2">
                {lang === 'zh' 
                  ? '第一篇深度文章正在撰写中，敬请期待。' 
                  : 'First deep article is in progress. Stay tuned.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

#### 7. Article Card 设计

**新建文件**: `components/blog/ArticleCard.tsx`

```tsx
export function ArticleCard({ article, lang }) {
  return (
    <article className="group">
      <a 
        href={`/${lang}/blog/${article.slug}`}
        className="block p-6 rounded-lg bg-code-bg hover:bg-code-bg/80 transition-all"
      >
        {/* 分类标签 */}
        <div className="flex gap-2 mb-3">
          {article.tags?.slice(0, 2).map(tag => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 rounded bg-terminal-green/10 text-terminal-green"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* 标题 */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-terminal-green transition-colors">
          {article.title}
        </h3>
        
        {/* 摘要 */}
        <p className="text-secondary/70 text-sm mb-4 line-clamp-3">
          {article.excerpt || article.description}
        </p>
        
        {/* 元信息 */}
        <div className="flex items-center gap-4 text-xs text-secondary/50">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readingTime || '5 min read'}</span>
        </div>
      </a>
    </article>
  );
}
```

---

### 第三阶段：About 页面整理（Day 4-5）

#### 8. About 页面重构 (app/[lang]/about/page.tsx)

将首页移除的内容整理到 About 页面：

**新的 About 页面结构**:
```tsx
export default function AboutPage({ params }) {
  return (
    <main className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* 开场白 */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">关于我</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg">
              我是一名全栈工程师，专注于系统设计。
              在 AI 时代，我在思考...（150-200字）
            </p>
          </div>
        </section>

        {/* 为什么听我的 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">为什么我的观点值得听</h2>
          <div className="space-y-4">
            {/* 核心观点和价值主张 */}
          </div>
        </section>

        {/* 工作经历（从首页移过来）*/}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">经历</h2>
          <Timeline experiences={experiences} />
        </section>

        {/* 技能地图（可选，可视化展示）*/}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">技能</h2>
          {/* 简化的技能展示，不是标签云 */}
        </section>

        {/* 联系方式 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">联系</h2>
          <div className="flex gap-4">
            <a href="mailto:your@email.com" className="...">Email</a>
            <a href="https://twitter.com/..." className="...">Twitter</a>
          </div>
        </section>
      </div>
    </main>
  );
}
```

---

### 第四阶段：细节优化（Day 6-7）

#### 9. 导航栏更新 (components/Header.tsx)

**隐藏"资源"链接**（暂时没有内容）:
```tsx
const navItems = [
  { href: '/blog', label: dict.nav.blog },
  { href: '/projects', label: dict.nav.projects },
  // { href: '/resources', label: dict.nav.resources }, // 注释掉
  { href: '/about', label: dict.nav.about },
];
```

#### 10. Footer 更新 (components/Footer.tsx)

**添加联系方式**:
```tsx
<div className="social-links">
  <a href="mailto:your@email.com">Email</a>
  <a href="https://twitter.com/yourhandle">Twitter</a>
</div>
```

#### 11. 博客分类标签体系更新

在博客相关组件中，更新分类标签：

**旧标签**: mdx, nextjs, 博客
**新标签**: 
- 系统设计 (Systems Design)
- AI工程化 (AI Engineering)
- 产品思维 (Product Thinking)
- 项目复盘 (Project Reflections)

---

### 第五阶段：性能和 SEO（Day 7）

#### 12. Meta 标签验证

确保所有页面都有正确的 meta 标签：
- title
- description
- og:image
- twitter:card

#### 13. 响应式测试

在以下断点测试所有改动：
- 移动端: 375px
- 平板: 768px
- 桌面: 1440px

---

## 🛠️ 实施指南

### 开发流程

1. **创建新分支**
```bash
git checkout -b refactor/editorial-design
```

2. **按顺序实施改动**
- Day 1-2: 内容和配置文件
- Day 3-4: 首页视觉重构
- Day 4-5: About 页面
- Day 6-7: 细节优化和测试

3. **测试验证**
```bash
npm run dev
# 在本地 localhost:3000 测试所有改动
```

4. **提交和部署**
```bash
git add .
git commit -m "refactor: transform to editorial design"
git push origin refactor/editorial-design
# 合并到 main 后自动部署到 Vercel
```

### 关键文件清单

需要修改的文件：
- [ ] `app/[lang]/page.tsx` (首页主体)
- [ ] `app/[lang]/layout.tsx` (meta 标签)
- [ ] `app/[lang]/about/page.tsx` (About 页面)
- [ ] `app/[lang]/blog/page.tsx` (博客描述)
- [ ] `lib/config-i18n.ts` 或类似配置文件 (profile 数据)
- [ ] `lib/seo/metadata.ts` (SEO 配置)
- [ ] `components/Header.tsx` (导航)
- [ ] `components/Footer.tsx` (Footer)

需要创建的新文件：
- [ ] `components/hero/HeroV2.tsx`
- [ ] `components/home/FeaturedWriting.tsx`
- [ ] `components/blog/ArticleCard.tsx`

需要删除或移动的组件：
- [ ] `components/hero/Typewriter.tsx` (可以保留但不在首页用)
- [ ] `components/hero/Timeline.tsx` (移到 About 页面)
- [ ] `components/hero/SkillCloud.tsx` (移到 About 页面或删除)

---

## 🎨 设计规范

### 颜色
保持现有的深色主题，但确保：
- 主背景: `bg-background` (深色)
- 文字: `text-foreground` (浅色)
- 强调色: `text-terminal-green` (保持)
- 次要文字: `text-secondary` (灰色)

### 字体
保持现有字体配置：
- 正文: Inter
- 代码/标题: JetBrains Mono
- 中文: Noto Sans SC

### 间距
- Section 间距: `py-20` 或 `py-16`
- 容器宽度: `max-w-4xl` (文章) 或 `max-w-6xl` (网格布局)

---

## ✅ 验收标准

改造完成后，网站应该：

1. **首页**
   - ✅ 清晰展示身份定位
   - ✅ 没有虚假数据
   - ✅ 没有简历式的工作经历展示
   - ✅ 有"最新思考"区域（即使是占位符）
   - ✅ 有 Newsletter 订阅入口

2. **About 页面**
   - ✅ 包含详细的自我介绍
   - ✅ 包含工作经历
   - ✅ 包含联系方式

3. **Blog 页面**
   - ✅ 描述符合新定位
   - ✅ 标签体系更新

4. **整体**
   - ✅ 移动端完美适配
   - ✅ 加载速度快
   - ✅ SEO 优化到位
   - ✅ 没有 console 错误

---

## 📝 注意事项

1. **保持现有技术栈**
   - 不要改变 Next.js 配置
   - 不要移除现有依赖
   - 保持国际化结构

2. **渐进式改造**
   - 一次改一个页面
   - 每次改动后测试
   - 保持 git commit 清晰

3. **内容优先**
   - 文案比视觉更重要
   - 先改文字，再改样式
   - 确保移动端可读性

4. **性能优先**
   - 不要添加大图片
   - 保持动画简洁
   - 优化首屏加载

---

## 🚀 部署计划

1. **本地验证**
   - 所有页面都能正常访问
   - 响应式设计正常
   - 没有控制台错误

2. **Staging 测试**
   - 部署到 Vercel preview
   - 分享给 1-2 个朋友看反馈

3. **正式上线**
   - 合并到 main 分支
   - 自动部署到 alexlabx.com
   - 发布社交媒体公告

---

## 🎯 改造目标检查

完成后，访问 https://alexlabx.com 应该能在 5 秒内回答：

1. **Alex 是谁？**
   → AI 时代的系统设计工程师

2. **他做什么？**
   → 思考如何让 AI 从实验室走向生产环境

3. **为什么关注他？**
   → 深度思考 + 系统设计 × AI 工程化

4. **接下来做什么？**
   → 阅读文章 / 订阅 Newsletter / 联系他

---

现在开始改造吧！按照这个计划，1-2 周内完成一个焕然一新的个人网站。

Good luck! 🚀
