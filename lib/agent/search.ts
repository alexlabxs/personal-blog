/**
 * 关键词匹配检索 (Edge Runtime 兼容版本)
 * MVP 版本：简单的字符串匹配，无需向量数据库
 */

// 静态知识库数据（构建时导入）
const KNOWLEDGE_DATA = {
  profile: `
# 个人知识库 - Profile

## 基本信息
- 姓名：Alex
- 角色：Senior Java Engineer（财务方向）
- 位置：China
- 工作状态：Open to opportunities
- GitHub: https://github.com/xiaokaihan
- 认证：PMP 项目管理认证

## 工作经历

### Insurance Company | Senior Java Engineer (Finance) | 2019 - 至今
- 负责财务系统核心模块开发，包括费控管理、收付费、记账引擎
- 主导 IFRS17 准则重构项目，落地会计引擎与分摊模块
- 集成 LLM 与 OCR 技术，实现智能审单等 AI 提效功能

### Lingzhi Software | Java Developer | 2017 - 2019
- 参与金融行业系统功能模块设计与开发
- 负责核心业务逻辑实现与性能优化

### YiJiaoYi Tech | Java Developer | 2015 - 2017
- 负责金融行情系统后台开发
- 确保行情数据的实时高可用性

## 技术能力

### 精通
- Java, Spring Boot, Spring Cloud
- MySQL, Oracle, Redis
- RocketMQ 分布式消息
- 微服务架构设计与分布式事务处理

### 熟悉
- Docker, Kubernetes
- Jenkins, Git CI/CD
- Vue.js 前端开发
- PMP 敏捷项目管理

### 学习中
- AI/ML (LLM 集成, OCR 应用)
- 智能审单、智能报销等 AI 落地场景

## 研究方向
- AI 在财务系统的落地应用
- 分布式系统数据一致性保障
- 企业数字化转型
`,
  opinions: `
# 技术观点和价值观

## 核心观点

### 关于技术选择

**我喜欢的技术**：
- **Spring Boot** — 简化了 Java 企业级开发，约定优于配置。配合 Spring Cloud 可以快速构建微服务架构。
- **RocketMQ** — 事务消息解决分布式数据一致性的好方案，在收付费场景表现稳定。
- **微服务拆分** — 恰当的服务边界能提升系统可维护性，但不要过度拆分。
- **AI 落地** — 解决真实业务痛点才有价值。OCR 和 LLM 在财务场景有实际提效效果。

**我的开发哲学**：
- **简单优于复杂** — 好的架构不是最复杂的，而是恰到好处解决问题的。
- **数据准确性优先** — 财务系统不允许出错，要有兜底方案。
- **业务驱动技术** — 技术服务于真实需求，不是为了炫技。
- **系统稳定性敏感** — 关键流程要有幂等校验和异常重试补偿。

### 关于 AI 和未来
- AI 是业务提效的工具，OCR 和智能审单已经落地验证。
- LLM 在非结构化数据处理上有很大潜力，值得探索。
- PMP 让我关注项目管理流程，技术落地需要流程支撑。
`,
  qa: `
# 常见问题预设答案

## 关于工作

**Q: 你现在在做什么？**
A: 我目前在保险公司担任 Senior Java Engineer，负责财务系统核心模块开发。主要项目包括费控管理、收付费微服务、记账引擎和 IFRS17 准则重构。同时也在探索 AI 在财务系统的落地应用。

**Q: 你在找工作吗？**
A: 我对有趣的机会持开放态度。如果你有财务系统、分布式架构、或者 AI 落地相关的岗位，欢迎联系我。

**Q: 你喜欢什么样的团队？**
A: 我喜欢技术驱动、工程文化好的团队。CI/CD 自动化、代码质量重视、持续学习氛围是加分项。PMP 认证让我也关注项目管理流程。

## 关于技术

**Q: 你的主要技术栈是什么？**
A: Java/Spring Boot/Spring Cloud 是我的核心栈。数据库主要用 MySQL、Oracle、Redis。消息队列用 RocketMQ 解决分布式事务。熟悉 Docker/K8s 容器化部署和 Jenkins CI/CD。

**Q: 为什么你喜欢 Spring Boot？**
A: 简化了 Java 企业级开发，约定优于配置。配合 Spring Cloud 可以快速构建微服务架构，在保险财务场景下表现稳定。

**Q: 你怎么看待 AI？**
A: AI 是业务提效的重要工具。我已经落地了 OCR 票据识别、智能审单等功能。LLM 在非结构化数据处理上有很大潜力。

**Q: 你有 PMP 认证，这有什么用？**
A: PMP 让我能更好地理解项目管理流程，在负责核心模块时也能做好进度管控和跨团队协作。

## 关于项目

**Q: 你有什么项目？**
A: 费控管理系统实现了 OCR 智能报销，效率提升一倍；收付费微服务处理高并发扣费，实现资金处理零差错；记账微服务统一了财务数据入口；IFRS17 重构项目落地了会计引擎和分摊模块。

**Q: 你接受外包吗？**
A: 视项目而定。如果是财务系统、分布式架构、或者 AI 落地相关的项目，可以聊聊。

## 关于联系

**Q: 如何联系你？**
A: GitHub: github.com/xiaokaihan，X: @DreamkeyKey。邮件: dreamkey.xiao@gmail.com
`,
  projects: `
## 项目列表

### 费控及智能报销管理系统
- 企业费用报销与预算管理平台，集成 OCR 智能识别、移动端报销、预算自动核销。
- 技术栈：Spring Boot, Oracle, BPM, OCR, 企业微信
- 状态：已上线
- 报销效率提升一倍

### 收付费微服务
- 高并发收付费系统，处理实时扣费与批量扣款任务，确保资金流水绝对准确。
- 技术栈：Java, Spring Cloud, RocketMQ, MySQL, 分布式事务
- 状态：已上线
- 实现资金处理零差错

### 记账微服务系统
- 财务数据总入口，将各业务系统原始数据转化为标准化财务凭证。
- 技术栈：Spring Cloud, Nacos, Sentinel, 接口限流补偿
- 状态：已上线

### IFRS17 财务准则重构
- 应对保险行业 IFRS17 准则，开发会计引擎与分摊模块。
- 技术栈：Java, Spring Boot, Postgres, 大数据量批处理
- 状态：已上线

GitHub：https://github.com/xiaokaihan
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
    '后端': ['backend', 'server', 'java', 'spring'],
    'ai': ['人工智能', 'agent', 'llm', 'ocr'],
    'java': ['spring', '微服务'],
    '财务': ['finance', '记账', '费控'],
    '分布式': ['distributed', 'mq', 'rocketmq'],
    'pmp': ['项目管理', '敏捷'],
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