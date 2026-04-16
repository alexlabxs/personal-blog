# 部署指南

本文档介绍如何将个人博客部署到 Vercel。

---

## 前置条件

### 1. GitHub 仓库
- 确保代码已推送到 GitHub 仓库
- 公开仓库或 Vercel 可访问的私有仓库

### 2. 域名（可选）
- 注册域名（推荐 `.dev` 或 `.io` 后缀）
- 域名解析设置（可选，可使用 Vercel 提供的域名）

---

## 部署步骤

### 方法一：通过 Vercel Dashboard（推荐）

1. **注册/登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择 GitHub 仓库
   - 点击 "Import"

3. **配置环境变量**
   - 在项目设置中添加环境变量
   - 参考 `.env.example` 文件
   - 必填项：
     ```
     NEXT_PUBLIC_SITE_URL: https://your-domain.dev
     ```

4. **部署配置**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Framework: `Next.js`

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成

### 方法二：使用 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel --prod
   ```

---

## 环境变量配置

在 Vercel Dashboard 的项目设置中添加以下环境变量：

### 必填项
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.dev
```

### 可选（Agent 功能）
```env
# Claude API Key（用于 AI 对话功能）
NEXT_PUBLIC_CLAUDE_API_KEY=your-clude-api-key

# GitHub Token（用于展示 GitHub 项目信息）
NEXT_PUBLIC_GITHUB_TOKEN=your-github-token

# Umami Analytics（可选）
NEXT_PUBLIC_UMAMI_ID=your-umami-id
NEXT_PUBLIC_UMAMI_URL=https://analytics.your-domain.com
```

> **注意**：生产环境的 API Key 应该在 Vercel Dashboard 的环境变量中设置，不要在代码中硬编码。

---

## 自定义域名配置

1. **在 Vercel 中添加域名**
   - 进入项目设置 → Domains
   - 输入你的域名
   - Vercel 会自动生成 SSL 证书

2. **DNS 配置**
   - 使用 CNAME 记录指向 Vercel
   - 或者使用 DNS 自动发现（推荐）

3. **验证配置**
   - 等待 DNS 生效（通常几分钟）
   - 访问域名确认正常

---

## 性能优化

### 1. 图片优化
- 已配置 `next/image` 自动优化
- 所有图片都会 WebP 格式转换
- 自动响应式尺寸

### 2. 代码分割
- Next.js 自动进行路由级代码分割
- 大组件使用 `dynamic()` 懒加载

### 3. 缓存策略
- 静态资源默认缓存
- Vercel CDN 全球加速

---

## 监控和分析

### 1. Umami Analytics（可选）
1. 在 Umami 官网注册账号
2. 创建新网站，获取追踪 ID
3. 在 Vercel 环境变量中配置：
   ```
   NEXT_PUBLIC_UMAMI_ID=your-tracking-id
   ```

### 2. Vercel Analytics
- 内置访问分析
- 性能监控
- 错误追踪

---

## 故障排查

### 常见问题

1. **构建失败**
   - 检查 `package.json` 依赖
   - 确保所有环境变量已配置
   - 查看 Vercel 构建日志

2. **404 错误**
   - 检查路由配置
   - 确认文件路径正确

3. **样式问题**
   - 清除浏览器缓存
   - 检查 Tailwind CSS 配置

### 调试命令

```bash
# 本地构建测试
npm run build

# 类型检查
npm run lint

# 格式化代码
npm run format
```

---

## 维护建议

### 1. 定期更新
- 更新依赖包：
  ```bash
  npm update
  ```
- 检查安全漏洞

### 2. 内容更新
- 保持博客更新频率
- 定期检查链接有效性

### 3. 性能监控
- 定期检查 Lighthouse 分数
- 监控加载时间

---

*最后更新：2026-04-16*