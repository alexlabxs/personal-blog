# 个人博客重构快速开始指南

> 📅 创建日期：2026-04-26
> 📄 完整计划：[refactor-development-plan.md](./refactor-development-plan.md)

---

## 🚀 快速开始（3分钟）

### 第一步：创建开发分支
```bash
cd /Users/niuniu/Documents/project/blog
git checkout -b refactor/editorial-design
```

### 第二步：了解当前状态
```bash
# 查看当前项目结构
ls -la

# 查看首页当前实现
cat app/[lang]/page.tsx

# 查看配置文件
cat lib/config-i18n.ts
```

### 第三步：开始第一阶段
按照 [完整重构计划](./refactor-development-plan.md) 中的第一阶段任务开始实施。

---

## 📋 重构概览

### 核心目标
将个人博客从"简历式展示"改造为"思想输出平台"

### 转变方向
- **旧定位**: "AI Agent 开发者 | 全栈工程师" (简历式)
- **新定位**: "AI 时代的系统设计工程师" (思想家式)

### 设计风格
- 编辑叙事风格 (Editorial + Narrative)
- 深色主题
- 内容优先、视觉层次丰富、有故事感

### 核心价值
"让 AI 从实验室走向生产环境"

---

## 🎯 5个阶段概览

| 阶段 | 内容 | 预计时间 | 主要产出 |
|------|------|----------|----------|
| **第一阶段** | 内容和定位 | Day 1-2 | 配置文件更新、文案调整 |
| **第二阶段** | 首页视觉重构 | Day 3-4 | HeroV2、FeaturedWriting、ArticleCard 组件 |
| **第三阶段** | About 页面 | Day 4-5 | 整理工作经历、技能展示 |
| **第四阶段** | 细节优化 | Day 6-7 | 导航、Footer、标签体系 |
| **第五阶段** | 性能和 SEO | Day 7 | Meta 标签、响应式测试、性能优化 |

---

## 🔧 关键文件清单

### 需要修改的文件（8个）
```
lib/config-i18n.ts              # 配置文件（核心）
lib/seo/metadata.ts             # SEO 元数据
app/[lang]/page.tsx             # 首页（重点）
app/[lang]/about/page.tsx       # About 页面
app/[lang]/blog/page.tsx        # 博客页面
app/[lang]/layout.tsx           # 布局
components/Header.tsx            # 导航栏
components/Footer.tsx            # 页脚
```

### 需要创建的新文件（3个）
```
components/hero/HeroV2.tsx      # 新的 Hero 组件
components/home/FeaturedWriting.tsx  # 最新思考 Section
components/blog/ArticleCard.tsx  # 文章卡片
```

### 需要迁移的组件（3个）
```
components/hero/Timeline.tsx    # 移至 About 页面
components/hero/SkillCloud.tsx  # 移至 About 页面
components/hero/Typewriter.tsx   # 保留备用
```

---

## 📝 Day 1 快速任务清单

### 上午（2小时）
- [ ] 创建开发分支
- [ ] 阅读 [完整重构计划](./refactor-development-plan.md)
- [ ] 备份当前关键文件
- [ ] 更新 `lib/config-i18n.ts` 的 profile 数据

### 下午（4小时）
- [ ] 更新 SEO 元数据 `lib/seo/metadata.ts`
- [ ] 更新博客页面描述
- [ ] 删除首页虚假数据卡片
- [ ] 创建新的首页结构大纲
- [ ] 本地测试基本改动

### 晚上验收
- [ ] 确保配置文件更新正确
- [ ] 确保 SEO 元数据完整
- [ ] 提交代码（git commit）

---

## 🎨 设计规范速查

### 颜色方案
```css
主背景:    bg-background     (深色)
文字:      text-foreground   (浅色)
强调色:    text-terminal-green
次要文字:  text-secondary    (灰色)
```

### 字体配置
```
正文:      Inter
代码/标题: JetBrains Mono
中文:      Noto Sans SC
```

### 间距规范
```
Section 间距: py-20 或 py-16
容器宽度:
  - 文章: max-w-4xl
  - 网格: max-w-6xl
```

---

## ✅ 验收标准（5秒自检）

访问网站后，能否在5秒内回答：
1. ✅ Alex 是谁？
   → AI 时代的系统设计工程师

2. ✅ 他做什么？
   → 思考如何让 AI 从实验室走向生产环境

3. ✅ 为什么关注他？
   → 深度思考 + 系统设计 × AI 工程化

4. ✅ 接下来做什么？
   → 阅读文章 / 订阅 Newsletter / 联系他

---

## 🔍 常用命令

### 开发
```bash
npm run dev              # 启动开发服务器
npm run build            # 构建生产版本
npm run lint             # 代码检查
npm run start            # 启动生产服务器
```

### Git
```bash
git status               # 查看状态
git add .                # 添加所有改动
git commit -m "msg"      # 提交
git push origin branch   # 推送到远程
```

### 测试
```bash
# 移动端测试
chrome://inspect        # Chrome DevTools 设备模拟
# 响应式断点: 375px, 768px, 1440px

# 性能测试
npm install -g lighthouse
lighthouse https://your-site.com
```

---

## ⚠️ 重要提醒

### 必须遵守的原则
1. ✅ **保持现有技术栈** - 不改变 Next.js 配置和依赖
2. ✅ **渐进式改造** - 一次改一个页面，每次改动后测试
3. ✅ **内容优先** - 文案比视觉更重要
4. ✅ **性能优先** - 不添加大图片，保持动画简洁

### 常见风险
1. ⚠️ **中英文文案一致性** - 需要确保两种语言风格统一
2. ⚠️ **移动端适配** - 重点测试移动端显示效果
3. ⚠️ **SEO 影响** - 改造后需要重新提交 sitemap
4. ⚠️ **用户体验** - 需要邀请朋友测试反馈

---

## 📞 需要帮助？

### 文档资源
- [完整重构计划](./refactor-development-plan.md) - 详细任务清单
- [claude-code-refactor-prompt.md](./claude-code-refactor-prompt.md) - 原始需求文档
- [PROJECT_SPECS.md](../PROJECT_SPECS.md) - 项目技术规范
- [README.md](../README.md) - 项目整体说明

### 问题排查
```bash
# 检查控制台错误
npm run dev  # 查看 localhost:3000 控制台

# 检查构建错误
npm run build

# 检查类型错误
npx tsc --noEmit
```

---

## 🎉 开始行动！

```bash
# 1. 创建分支
git checkout -b refactor/editorial-design

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器
open http://localhost:3000

# 4. 开始第一阶段任务！
```

**按照完整计划执行，7天后你将拥有一个全新的个人博客！** 🚀

---

*最后更新：2026-04-26*
*预计完成时间：7天*