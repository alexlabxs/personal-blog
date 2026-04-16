# Alex Xiao's Personal Blog

> Code. Create. Connect.

一个融合 AI Agent 的个人博客网站，展示 Full-Stack 开发技能和项目经验。

## 项目状态

**当前版本**: MVP v0.1.0 (开发中) - Alex Xiao Brand Update

**开发进度**: 55% [████████████████░░░]

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **语言**: TypeScript

## 项目结构

```
blog/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Hero 主页
│   ├── blog/              # 博客页面
│   ├── projects/          # 项目展示
│   ├── about/             # 关于我
│   └── api/chat/          # Agent API
├── components/            # React 组件
│   ├── hero/             # Hero 页面组件
│   └── projects/         # 项目卡片组件
├── content/posts/        # MDX 博客文章
├── knowledge/            # Agent 知识库
├── lib/                  # 工具函数和配置
└── public/               # 静态资源
```

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 访问地址

- 本地开发: http://localhost:3000
- 生产环境: (待部署)

## 项目文档

- [项目规划](./personal_blog_plan.md)
- [实施计划](./IMPLEMENTATION_PLAN.md)
- [项目规范](./PROJECT_SPECS.md)

## 开发阶段

### Phase 1 - MVP 上线 (进行中)

- [x] 项目初始化
- [x] 基础结构搭建
- [x] Hero 主页
- [x] 项目展示页
- [ ] 博客系统 (MDX)
- [ ] 全局组件 (Header/Footer)
- [ ] 部署上线

### Phase 2 - Agent 接入 (待开始)

- [ ] 知识库搭建
- [ ] System Prompt 编写
- [ ] RAG 系统实现
- [ ] Agent API 开发
- [ ] 对话 UI 开发

### Phase 3 - 持续打磨 (待开始)

- [ ] SEO 优化
- [ ] RSS Feed
- [ ] 邮件订阅
- [ ] 性能优化

## License

MIT

---

*Last Updated: 2026-04-15*
