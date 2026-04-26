# 个人博客重构开发计划

> 基于文档：claude-code-refactor-prompt.md
> 创建日期：2026-04-26
> 预计完成周期：7天

---

## 📋 项目概述

**项目目标**：将个人博客从"简历式展示"改造为"思想输出平台"

**核心转变**：
- **旧定位**："AI Agent 开发者 | 全栈工程师" (简历式)
- **新定位**："AI 时代的系统设计工程师" (思想家式)

**设计风格**：编辑叙事风格 (Editorial + Narrative)
**背景主题**：深色主题
**核心价值**："让 AI 从实验室走向生产环境"

---

## 🎯 重构阶段划分

### 第一阶段：内容和定位（Day 1-2）

**目标**：更新文案和配置，建立新的内容结构

#### 任务清单

##### 1.1 更新配置文件
- [ ] 修改 `lib/config-i18n.ts`
  - [ ] 更新 `baseProfile.role` 为 "AI 时代的系统设计工程师"
  - [ ] 更新中文 `role` 为 "AI 时代的系统设计工程师"
  - [ ] 更新英文 `role` 为 "Systems Design Engineer in AI Era"
  - [ ] 更新中文 `tagline` 为 "让 AI 从实验室走向生产环境"
  - [ ] 更新英文 `tagline` 为 "Making AI Production-Ready"
  - [ ] 更新中文 `bio` 为新的价值主张文案
  - [ ] 更新英文 `bio` 为新的价值主张文案
  - [ ] 保留 `experiences` 数据（将移至 About 页面）
  - [ ] 保留 `skills` 数据（将移至 About 页面）

##### 1.2 更新 SEO 元数据
- [ ] 检查并更新 `lib/seo/metadata.ts`
  - [ ] 更新 `siteConfig.title.zh` 为 "Alex — AI 时代的系统设计工程师"
  - [ ] 更新 `siteConfig.title.en` 为 "Alex — Systems Design Engineer in AI Era"
  - [ ] 更新 `siteConfig.description.zh` 为 "思考 AI 工程化、系统设计和产品。让 AI 从实验室走向生产环境。"
  - [ ] 更新 `siteConfig.description.en` 为 "Thinking about AI engineering, systems design, and products. Making AI production-ready."
  - [ ] 更新 `keywords` 为新的标签体系

##### 1.3 更新博客页面描述
- [ ] 修改 `app/[lang]/blog/page.tsx` 的描述文案
  - [ ] 中文："深度思考 AI 时代的系统设计。分享工程实践、架构决策和产品思维。"
  - [ ] 英文："Deep thinking on systems design in the AI era. Sharing engineering practices, architecture decisions, and product thinking."

##### 1.4 删除首页内容
- [ ] 删除虚假数据统计卡片（5+ 年经验 / 20+ 项目 / 30+ 文章）
- [ ] 删除工作经历 Timeline（移到 About 页）
- [ ] 删除技能标签云（移到 About 页）
- [ ] 删除代码块样式的自我介绍（`const me = {...}`）

##### 1.5 创建新的首页结构
- [ ] 创建 Hero Section（第一屏）
  - [ ] 新标题："AI 时代的系统设计工程师"
  - [ ] 新标语："让 AI 从实验室走向生产环境"
  - [ ] 新简介："全栈思维 × AI 工程化。我在思考：怎样才能让 AI 真正为组织创造价值？为什么系统设计在 AI 时代变得更重要？"
  - [ ] CTA 按钮："Read My Thinking →"

- [ ] 创建 Featured Writing Section（第二屏）
  - [ ] 标题："最新思考" / "Latest Thinking"
  - [ ] 文章卡片网格布局
  - [ ] 占位符内容（暂无文章）

- [ ] 创建 Brief About Section（第三屏）
  - [ ] 标题："关于我" / "About Me"
  - [ ] 简短介绍（100-150字）
  - [ ] "了解更多"链接

- [ ] 创建 Newsletter Section（第四屏）
  - [ ] 标题："订阅我的思考" / "Subscribe"
  - [ ] Email 订阅表单

---

### 第二阶段：首页视觉重构（Day 3-4）

**目标**：创建新的视觉组件，实现编辑叙事风格

#### 任务清单

##### 2.1 创建 HeroV2 组件
- [ ] 新建文件 `components/hero/HeroV2.tsx`
- [ ] 实现深色背景（`bg-background`）
- [ ] 添加渐变效果
- [ ] 添加微妙的背景图案（网格或纹理）
- [ ] 简洁的文字排版（非代码风格）
- [ ] 清晰的 CTA 按钮
- [ ] 响应式设计支持

##### 2.2 创建 FeaturedWriting 组件
- [ ] 新建文件 `components/home/FeaturedWriting.tsx`
- [ ] 实现文章卡片网格布局
- [ ] 添加占位符内容
- [ ] 响应式设计（移动端1列，平板2列，桌面3列）
- [ ] 添加加载动画

##### 2.3 创建 ArticleCard 组件
- [ ] 新建文件 `components/blog/ArticleCard.tsx`
- [ ] 实现卡片布局
- [ ] 添加分类标签
- [ ] 添加标题和摘要
- [ ] 添加元信息（日期、阅读时间）
- [ ] 添加 hover 效果

##### 2.4 更新首页主文件
- [ ] 重构 `app/[lang]/page.tsx`
- [ ] 移除旧组件引用
- [ ] 集成 HeroV2
- [ ] 集成 FeaturedWriting
- [ ] 集成 Brief About
- [ ] 集成 Newsletter
- [ ] 确保响应式布局

---

### 第三阶段：About 页面整理（Day 4-5）

**目标**：将首页移除的内容整理到 About 页面

#### 任务清单

##### 3.1 重构 About 页面结构
- [ ] 修改 `app/[lang]/about/page.tsx`
- [ ] 创建开场白 Section
  - [ ] 标题："关于我"
  - [ ] 详细自我介绍（150-200字）
  - [ ] 思想定位说明

- [ ] 创建"为什么听我的" Section
  - [ ] 标题："为什么我的观点值得听"
  - [ ] 核心观点和价值主张
  - [ ] 专业背景说明

- [ ] 创建经历 Section
  - [ ] 标题："经历"
  - [ ] 集成 Timeline 组件
  - [ ] 展示工作经历

- [ ] 创建技能 Section（可选）
  - [ ] 标题："技能"
  - [ ] 简化的技能展示
  - [ ] 不是标签云形式

- [ ] 创建联系方式 Section
  - [ ] 标题："联系"
  - [ ] Email 链接
  - [ ] 社交媒体链接

##### 3.2 更新导航链接
- [ ] 确保首页的"了解更多"链接指向 About 页面

---

### 第四阶段：细节优化（Day 6-7）

**目标**：优化页面细节，提升用户体验

#### 任务清单

##### 4.1 更新导航栏
- [ ] 修改 `components/Header.tsx`
- [ ] 隐藏"资源"链接（暂时没有内容）
- [ ] 确保导航链接正确
- [ ] 测试移动端导航

##### 4.2 更新 Footer
- [ ] 修改 `components/Footer.tsx`
- [ ] 添加 Email 联系方式
- [ ] 添加 Twitter/X 链接
- [ ] 更新版权信息

##### 4.3 更新博客分类标签
- [ ] 更新博客相关组件
- [ ] 旧标签：mdx, nextjs, 博客
- [ ] 新标签：
  - 系统设计 (Systems Design)
  - AI工程化 (AI Engineering)
  - 产品思维 (Product Thinking)
  - 项目复盘 (Project Reflections)

##### 4.4 动画效果优化
- [ ] 确保 Framer Motion 动画流畅
- [ ] 优化页面加载动画
- [ ] 添加过渡效果

##### 4.5 字体和排版优化
- [ ] 确保中文字体正确加载（Noto Sans SC）
- [ ] 优化字体大小和行高
- [ ] 确保代码字体（JetBrains Mono）正确

---

### 第五阶段：性能和 SEO（Day 7）

**目标**：优化性能和 SEO，确保网站质量

#### 任务清单

##### 5.1 Meta 标签验证
- [ ] 检查所有页面的 meta 标签
- [ ] 确保 title 正确
- [ ] 确保 description 正确
- [ ] 确保 og:image 存在
- [ ] 确保 twitter:card 正确

##### 5.2 响应式测试
- [ ] 测试移动端 (375px)
- [ ] 测试平板 (768px)
- [ ] 测试桌面 (1440px)
- [ ] 测试不同浏览器

##### 5.3 性能优化
- [ ] 检查 Lighthouse 性能分数
- [ ] 优化图片加载
- [ ] 优化 CSS 和 JS 打包
- [ ] 确保 Core Web Vitals 达标

##### 5.4 无障碍性测试
- [ ] 检查键盘导航
- [ ] 检查屏幕阅读器支持
- [ ] 检查颜色对比度

##### 5.5 本地测试
- [ ] 运行 `npm run dev`
- [ ] 测试所有页面
- [ ] 测试语言切换
- [ ] 测试深色/浅色主题
- [ ] 检查控制台错误

---

## 🛠️ 技术实施细节

### 文件清单

#### 需要修改的文件：
1. `lib/config-i18n.ts` - 配置文件更新
2. `lib/seo/metadata.ts` - SEO 元数据更新
3. `app/[lang]/page.tsx` - 首页重构
4. `app/[lang]/about/page.tsx` - About 页面重构
5. `app/[lang]/blog/page.tsx` - 博客描述更新
6. `app/[lang]/layout.tsx` - 布局检查
7. `components/Header.tsx` - 导航更新
8. `components/Footer.tsx` - Footer 更新

#### 需要创建的新文件：
1. `components/hero/HeroV2.tsx` - 新的 Hero 组件
2. `components/home/FeaturedWriting.tsx` - 最新思考 Section
3. `components/blog/ArticleCard.tsx` - 文章卡片组件

#### 需要保留但迁移的组件：
1. `components/hero/Typewriter.tsx` - 保留，可能用于其他页面
2. `components/hero/Timeline.tsx` - 移至 About 页面
3. `components/hero/SkillCloud.tsx` - 移至 About 页面

### 设计规范

#### 颜色方案
- 主背景: `bg-background` (深色)
- 文字: `text-foreground` (浅色)
- 强调色: `text-terminal-green`
- 次要文字: `text-secondary` (灰色)

#### 字体配置
- 正文: Inter
- 代码/标题: JetBrains Mono
- 中文: Noto Sans SC

#### 间距规范
- Section 间距: `py-20` 或 `py-16`
- 容器宽度: `max-w-4xl` (文章) 或 `max-w-6xl` (网格布局)

---

## 📊 验收标准

### 首页验收
- [ ] 清晰展示身份定位："AI 时代的系统设计工程师"
- [ ] 没有虚假数据统计
- [ ] 没有简历式的工作经历展示
- [ ] 有"最新思考"区域（即使是占位符）
- [ ] 有 Newsletter 订阅入口
- [ ] CTA 按钮可点击
- [ ] 移动端完美适配

### About 页面验收
- [ ] 包含详细的自我介绍
- [ ] 包含工作经历
- [ ] 包含联系方式
- [ ] 页面结构清晰
- [ ] 响应式设计正常

### Blog 页面验收
- [ ] 描述符合新定位
- [ ] 标签体系更新
- [ ] 文章卡片显示正常
- [ ] 分类过滤功能正常

### 整体验收
- [ ] 移动端完美适配
- [ ] 加载速度快（Lighthouse Performance > 90）
- [ ] SEO 优化到位
- [ ] 没有 console 错误
- [ ] 中英文切换正常
- [ ] 深色/浅色主题切换正常

---

## 🚀 部署流程

### 1. 创建开发分支
```bash
git checkout -b refactor/editorial-design
```

### 2. 按阶段实施
- Day 1-2: 内容和配置文件
- Day 3-4: 首页视觉重构
- Day 4-5: About 页面
- Day 6-7: 细节优化和测试

### 3. 本地测试
```bash
npm run dev
# 在 localhost:3000 测试所有改动
```

### 4. 提交代码
```bash
git add .
git commit -m "refactor: transform to editorial design"
git push origin refactor/editorial-design
```

### 5. 部署到 Vercel
- 通过 Pull Request 创建 preview 部署
- 在 preview 环境测试
- 合并到 main 分支后自动部署到生产环境

### 6. 生产验证
- 访问 https://alexlabx.com
- 测试所有功能
- 监控性能指标
- 检查 SEO 指标

---

## ⚠️ 注意事项

### 技术约束
1. **保持现有技术栈**
   - 不改变 Next.js 配置
   - 不移除现有依赖
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
   - 不添加大图片
   - 保持动画简洁
   - 优化首屏加载

### 潜在风险
1. **中英文文案一致性** - 需要确保两种语言的文案风格统一
2. **移动端适配** - 重点测试移动端显示效果
3. **SEO 影响** - 改造后需要重新提交 sitemap
4. **用户体验** - 需要邀请朋友测试反馈

---

## 📝 进度跟踪

### 每日检查点
- [ ] Day 1: 配置文件和文案更新完成
- [ ] Day 2: 首页基础结构完成
- [ ] Day 3: HeroV2 组件完成
- [ ] Day 4: FeaturedWriting 和 ArticleCard 组件完成
- [ ] Day 5: About 页面重构完成
- [ ] Day 6: 导航、Footer 和细节优化完成
- [ ] Day 7: 性能优化和测试完成

### 里程碑
- [ ] **M1**: 首页重构完成（Day 4 结束）
- [ ] **M2**: About 页面重构完成（Day 5 结束）
- [ ] **M3**: 所有页面优化完成（Day 7 结束）
- [ ] **M4**: 部署到生产环境（Day 7）

---

## 🎯 最终目标

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

## 📞 联系与反馈

如遇到问题或需要调整计划，请：
1. 检查文档：claude-code-refactor-prompt.md
2. 查看项目文档：PROJECT_SPECS.md
3. 查看 README.md 了解项目结构

---

**让我们开始改造吧！按照这个计划，7天内完成一个焕然一新的个人网站。**

Good luck! 🚀
