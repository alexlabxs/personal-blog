# 个人博客项目规范

> 本文档定义项目的编码规范、工作流程和技术标准。

---

## 一、代码规范

### 1.1 命名约定

| 类型 | 约定 | 示例 |
|------|------|------|
| 组件 | PascalCase | `HeroSection.tsx`, `ProjectCard.tsx` |
| 工具函数 | camelCase | `formatDate()`, `calculateReadTime()` |
| 常量 | UPPER_SNAKE_CASE | `MAX_CHAT_MESSAGES`, `API_TIMEOUT` |
| 类型/接口 | PascalCase | `BlogPost`, `UserProfile` |
| 文件夹 | kebab-case | `hero-section/`, `agent-chat/` |

### 1.2 组件结构

```tsx
// 1. Imports
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. Types
interface ComponentProps {
  // ...
}

// 3. Constants
const ANIMATION_DURATION = 300;

// 4. Component
export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Hooks
  const [state, setState] = useState();

  // Handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    <div className="...">
      {/* content */}
    </div>
  );
}
```

### 1.3 Tailwind CSS 规范

- 优先使用 Tailwind 原子类
- 复杂样式提取到 `tailwind.config.js` theme
- 响应式设计优先移动端 (`mobile-first`)
- 语义化颜色使用 theme 变量

---

## 二、Git 工作流

### 2.1 分支策略

```
main           ← 生产环境，仅接受 PR merge
├── develop    ← 开发环境主分支
├── feature/*  ← 功能开发分支
└── fix/*      ← Bug 修复分支
```

### 2.2 提交信息规范

采用 Conventional Commits：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型 (type):**
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关

**示例:**
```
feat(blog): add MDX support with syntax highlighting

- Add MDX remote package for file-based routing
- Configure Shiki for code highlighting
- Add TOC component for navigation
```

---

## 三、环境配置

### 3.1 环境变量

所有环境变量必须定义在 `.env.example` 中：

```env
# API Keys (本地开发用测试密钥)
NEXT_PUBLIC_CLAUDE_API_KEY=sk-...
NEXT_PUBLIC_GITHUB_TOKEN=ghp_...

# Analytics
NEXT_PUBLIC_UMAMI_ID=...

# (部署时在 Vercel Dashboard 配置)
```

### 3.2 TypeScript 严格模式

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
```

---

## 四、内容规范

### 4.1 MDX 文章 Frontmatter

```yaml
---
title: "文章标题"
slug: "article-slug"
date: "2026-04-14"
excerpt: "文章摘要，用于 SEO 和列表展示"
tags: ["React", "Next.js", "TypeScript"]
readTime: 5
published: true
draft: false
series: "技术专题系列"
order: 1
---
```

### 4.2 文章结构建议

```markdown
# 标题

## 背景 / 问题

## 解决方案

## 实现细节

## 总结
```

### 4.3 图片资源

- 路径：`public/images/posts/{year}/{slug}/`
- 命名：`{name}.{ext}`，使用小写和连字符
- 格式：优先 WebP，降级 JPEG/PNG
- 尺寸：响应式优化，提供多规格

---

## 五、性能标准

### 5.1 Core Web Vitals

| 指标 | 目标 | 说明 |
|------|------|------|
| LCP | < 2.5s | 最大内容绘制时间 |
| FID | < 100ms | 首次输入延迟 |
| CLS | < 0.1 | 累积布局偏移 |

### 5.2 图片优化

- 使用 `next/image` 组件
- 启用 placeholder 模糊效果
- 提供 `width` 和 `height` 避免 CLS

### 5.3 代码分割

- 大型组件使用 `dynamic()` 懒加载
- 路由自动分割（Next.js App Router）

---

## 六、安全规范

### 6.1 API 密钥管理

- ✅ 所有 API Key 存储在环境变量
- ✅ 生产环境在 Vercel Dashboard 配置
- ❌ 绝不提交 API Key 到 Git

### 6.2 Agent 安全

- 实现 IP 限速（每天每 IP 限制 N 条消息）
- 过滤敏感问题（不回答隐私类问题）
- 对话历史仅存 Session，不持久化

### 6.3 XSS 防护

- 用户输入使用 `DOMPurify` 或类似库过滤
- MDX 内容在服务端渲染，避免客户端解析

---

## 七、SEO 规范

### 7.1 Meta Tags

```tsx
export const metadata = {
  title: '文章标题 | 你的名字',
  description: '文章描述',
  openGraph: {
    title: '文章标题',
    description: '文章描述',
    type: 'article',
    url: `https://yourname.dev/blog/${slug}`,
    images: [`/og/${slug}.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

### 7.2 Sitemap

- 自动生成 `sitemap.xml`
- 包含所有博客文章和主要页面

### 7.3 结构化数据

- Article schema 用于博客文章
- Person schema 用于个人资料

---

## 八、测试策略

### 8.1 测试类型

| 类型 | 工具 | 覆盖范围 |
|------|------|----------|
| 单元测试 | Vitest | 工具函数、纯组件 |
| 集成测试 | Playwright | 关键用户流程 |
| E2E 测试 | Playwright | Agent 对话、表单提交 |

### 8.2 测试文件命名

- `*.test.ts` - 单元测试
- `*.spec.tsx` - 组件测试
- `*.e2e.ts` - E2E 测试

---

## 九、部署流程

### 9.1 CI/CD 检查清单

- [ ] 所有测试通过
- [ ] TypeScript 无错误
- [ ] ESLint 无警告
- [ ] Lighthouse 性能评分 > 90

### 9.2 Vercel 部署配置

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["hkg1"]
}
```

---

*文档版本：v1.0 | 更新日期：2026-04-14*
