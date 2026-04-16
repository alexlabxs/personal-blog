/**
 * 关键词匹配检索 (Edge Runtime 兼容版本)
 * MVP 版本：简单的字符串匹配，无需向量数据库
 */

// 静态知识库数据（构建时导入）
const KNOWLEDGE_DATA = {
  profile: `
# 个人知识库 - Profile

## 基本信息
- 姓名：Niuniu
- 角色：Full-Stack Engineer
- 位置：China
- 工作状态：Open to opportunities
- GitHub: https://github.com/niuniu

## 工作经历

### Tech Company | Senior Frontend Engineer | 2023 - 至今
- 负责核心产品的前端架构设计与开发
- 推动技术栈升级，将构建时间减少 40%
- 带领团队落地 CI/CD 流程

### Startup Inc. | Full-Stack Developer | 2021 - 2023
- 从零开始搭建 SaaS 产品，服务 10万+ 用户
- 独立负责全栈开发
- 优化系统性能，API 响应时间降低 60%

### Tech Studio | Frontend Developer | 2019 - 2021
- 参与多个企业级项目的前端开发
- 负责组件库建设

## 技术能力

### 精通
- React, Next.js, TypeScript
- Node.js, PostgreSQL
- AWS, Docker

### 熟悉
- Python, Go
- MongoDB, Redis
- Kubernetes

### 学习中
- AI/ML (LangChain, OpenAI API, Claude API)
- 区块链开发

## 研究方向
- AI × Product 结合
- 前端工程化与性能优化
- 开发者体验 (DX) 提升
`,
  opinions: `
# 技术观点和价值观

## 核心观点

### 关于技术选择

**我喜欢的技术**：
- **Next.js** — App Router 设计优雅，SSR/SSG 灵活，生态成熟。React 开发者的最佳选择。
- **TypeScript** — 类型安全不是负担，是生产力。任何新项目都应该用 TypeScript。
- **Tailwind CSS** — CSS-in-JS 的替代方案，原子化 CSS 让样式开发更快，无需维护全局样式文件。
- **Claude API** — 相比 OpenAI，Claude 的回答更深思熟虑，适合需要深度分析的场景。

**我不太喜欢的技术**：
- **jQuery** — 属于上一个时代，新项目不应该使用。
- **CSS-in-JS (styled-components)** — 性能有开销，调试困难，Tailwind 更简洁。
- **过度的微服务架构** — 小团队不需要微服务，单体应用足够。过早拆分会增加复杂度。

### 关于开发哲学
1. **简单优于复杂** — 好的架构不是最复杂的，而是恰到好处解决问题的。
2. **MVP 先行** — 不要追求完美，先上线再迭代。发布频率比单篇质量更重要。
3. **Build in public** — 开放地分享构建过程，比闭门造车更有价值。
4. **工具服务于人** — 不要被工具绑架，选择让工作更愉快的技术。

### 关于 AI 和未来
- AI 不是替代程序员，而是放大程序员的能力。
- Agent 是下一代交互方式的雏形，每个人都应该了解如何构建 Agent。
- AI × Product 的结合是我正在探索的方向，希望创造有 AI 增强的产品体验。
`,
  qa: `
# 常见问题预设答案

## 关于工作

**Q: 你现在在做什么？**
A: 我目前在 Tech Company 担任 Senior Frontend Engineer，负责核心产品的前端架构。业余时间正在探索 AI × Product 的结合，构建个人项目和开源贡献。

**Q: 你在找工作吗？**
A: 我对有趣的机会持开放态度。如果你有 AI 相关、前端架构、或者从 0 到 1 构建产品的岗位，欢迎联系我。

**Q: 你喜欢什么样的团队？**
A: 我喜欢技术驱动、工程文化好的团队。CI/CD 自动化、代码质量重视、持续学习氛围是加分项。

## 关于技术

**Q: 你的主要技术栈是什么？**
A: React/Next.js + TypeScript 是我的核心栈。后端熟悉 Node.js、Python、Go。数据库常用 PostgreSQL、MongoDB。部署用 Vercel、AWS、Docker。

**Q: 为什么你喜欢 Next.js？**
A: App Router 设计优雅，SSR/SSG 灵活切换，生态成熟，Vercel 部署体验一流。React 开发者的最佳选择。

**Q: 你怎么看待 AI？**
A: AI 是程序员能力的放大器。我用 Claude API 和 OpenRouter 构建了多个项目。Agent 是下一代交互方式的雏形。

## 关于项目

**Q: 你有什么项目？**
A: 我的个人博客 alexxiao.dev 集成了 AI Agent 对话功能，访客可以直接问我问题。还有 AI Chat Application 支持多模型切换。GitHub 上有更多开源项目。

**Q: 你接受外包吗？**
A: 视项目而定。如果是 AI 相关、前端架构优化、或者有意思的产品想法，可以聊聊。

## 关于联系

**Q: 如何联系你？**
A: GitHub: github.com/niuniu，Twitter: @niuniu，LinkedIn: linkedin.com/in/niuniu。邮件: contact@niuniu.dev
`,
  projects: `
## 项目列表

### 个人博客网站 (personal-blog)
- 基于 Next.js 14 构建的现代化个人博客，集成 AI Agent 对话功能，访客可直接与 AI 版我交流。
- 技术栈：Next.js, TypeScript, Tailwind CSS, MDX, OpenRouter, Claude
- 状态：已上线
- 地址：https://alexlabx.com
- GitHub：https://github.com/xiaokaihan/personal-blog

### AI Chat Application
- 多模型 AI 聊天应用，支持 Claude、GPT-4、Gemini 等模型切换，流式输出体验。
- 技术栈：React, Next.js, OpenRouter API, Tailwind CSS
- 状态：已上线
- 地址：https://chat.alexlabx.com
- GitHub：https://github.com/xiaokaihan/ai-chat

### DevTools CLI
- 开发者工具命令行集合，包含代码生成、项目模板、Git 辅助等功能。
- 技术栈：Go, CLI, Shell
- 状态：开发中
- GitHub：https://github.com/xiaokaihan/devtools-cli

### 开源贡献
- 参与多个开源项目贡献，包括 Next.js、Tailwind CSS、LangChain 等社区项目。
- GitHub：https://github.com/niuniu
`,
};

// 提取关键词
function extractKeywords(query: string): string[] {
  // 中文关键词 + 英文关键词
  const chineseKeywords = query.match(/[\u4e00-\u9fa5]+/g) || [];
  const englishKeywords = query.match(/[a-zA-Z]+/g) || [];

  // 过滤短关键词，合并
  const keywords = [...chineseKeywords, ...englishKeywords]
    .filter(k => k.length >= 2)
    .map(k => k.toLowerCase());

  // 添加常见同义词
  const synonyms: Record<string, string[]> = {
    '项目': ['project', '作品'],
    '博客': ['blog', '文章', 'post'],
    '技术': ['tech', '技术栈', 'stack'],
    '工作': ['work', 'job', '职业', 'career'],
    '经历': ['experience', '履历'],
    '前端': ['frontend', 'react', 'next'],
    '后端': ['backend', 'server', 'node'],
    'ai': ['人工智能', 'agent', 'llm'],
    'nextjs': ['next.js', 'next'],
    'typescript': ['ts'],
  };

  const expandedKeywords = [...keywords];
  for (const keyword of keywords) {
    if (synonyms[keyword]) {
      expandedKeywords.push(...synonyms[keyword]);
    }
  }

  return expandedKeywords;
}

// 计算相关性分数
function calculateRelevanceScore(text: string, keywords: string[]): number {
  let score = 0;
  const lowerText = text.toLowerCase();

  for (const keyword of keywords) {
    const matches = lowerText.split(keyword).length - 1;
    score += matches * keyword.length; // 更长的关键词权重更高
  }

  return score;
}

// 分段文本
function splitIntoParagraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .filter(p => p.trim().length > 30) // 过滤太短的段落
    .map(p => p.trim());
}

/**
 * 搜索知识库
 * 返回最相关的上下文片段
 */
export function searchKnowledge(query: string, maxResults: number = 3): string {
  const keywords = extractKeywords(query);

  if (keywords.length === 0) {
    return '';
  }

  // 遍历所有知识源
  const results: { source: string; paragraph: string; score: number }[] = [];

  for (const [name, content] of Object.entries(KNOWLEDGE_DATA)) {
    const paragraphs = splitIntoParagraphs(content);

    for (const paragraph of paragraphs) {
      const score = calculateRelevanceScore(paragraph, keywords);
      if (score > 0) {
        results.push({
          source: name,
          paragraph,
          score,
        });
      }
    }
  }

  // 按分数排序，取前 N 个
  const topResults = results
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  if (topResults.length === 0) {
    return '';
  }

  // 构建上下文
  const context = topResults
    .map((r, i) => `[${i + 1}] ${r.paragraph}`)
    .join('\n\n');

  return context;
}

/**
 * 检查是否需要上下文
 * 对于简单问候语，不需要搜索知识库
 */
export function needsContext(query: string): boolean {
  const simpleGreetings = [
    '你好',
    'hi',
    'hello',
    '嗨',
    '早上好',
    '晚上好',
    '在吗',
    'hey',
    'thanks',
    '谢谢',
    '再见',
    'bye',
  ];

  const lowerQuery = query.toLowerCase().trim();

  // 如果只是问候语，不需要上下文
  if (simpleGreetings.some(g => lowerQuery === g || lowerQuery.startsWith(g + ' '))) {
    return false;
  }

  // 如果查询很短（< 5 字符），可能不需要上下文
  if (lowerQuery.length < 5) {
    return false;
  }

  return true;
}