# 本地服务启动指南

> **用途**：在本地启动开发服务器进行测试
> **日期**：2026-04-26
> **分支**：refactor/editorial-design

---

## 🚀 方法一：标准启动（推荐）

### 步骤1：打开终端
在 macOS 上打开 Terminal 或 iTerm2。

### 步骤2：进入项目目录
```bash
cd /Users/niuniu/Documents/project/blog
```

### 步骤3：确认分支
```bash
git branch
```
应该显示：`* refactor/editorial-design`

### 步骤4：启动开发服务器
```bash
npm run dev
```

### 步骤5：等待启动完成
你会看到类似输出：
```
✓ Ready in 2.3s
- Local:        http://localhost:3000
- Network:      http://192.168.1.2:3000
```

### 步骤6：访问网站
在浏览器中打开：
- http://localhost:3000
- 或直接点击终端中的链接

---

## 🔧 方法二：如果端口被占用

### 检查端口占用
```bash
lsof -i :3000
```

### 如果端口被占用
1. **杀掉占用端口的进程**：
```bash
kill -9 $(lsof -t -i:3000)
```

2. **或使用其他端口启动**：
```bash
PORT=3001 npm run dev
```

然后访问：http://localhost:3001

---

## 🐛 方法三：如果遇到问题

### 问题1：依赖安装问题
**症状**：启动时提示缺少依赖
```bash
# 重新安装依赖
npm install
```

### 问题2：构建缓存问题
**症状**：启动后显示错误或奇怪的行为
```bash
# 清除 Next.js 缓存
rm -rf .next

# 清除 node_modules 并重新安装
rm -rf node_modules package-lock.json
npm install

# 重新启动
npm run dev
```

### 问题3：Node 版本问题
**检查 Node 版本**：
```bash
node -v
```

**建议版本**：Node.js 18.x 或 20.x

**如果版本过低**：
```bash
# 使用 nvm 安装正确版本
nvm install 20
nvm use 20

# 重新启动
npm run dev
```

---

## 📱 方法四：使用其他启动选项

### 选项1：使用 Turbopack（更快）
```bash
npm run dev --turbo
```

### 选项2：使用生产模式测试
```bash
# 先构建
npm run build

# 再启动生产服务器
npm start
```

然后访问：http://localhost:3000

### 选项3：使用调试模式
```bash
NODE_ENV=development npm run dev
```

---

## 🧪 测试浏览器推荐

### 推荐浏览器
1. **Chrome**（推荐）
   - 按 F12 打开开发者工具
   - 查看 Console 标签检查错误
   - 查看 Network 标签检查加载

2. **Safari**
   - 右键 > 检查元素
   - 功能与 Chrome 类似

3. **Firefox**
   - 按 F12 打开开发者工具
   - 功能与 Chrome 类似

### Chrome DevTools 技巧

#### 1. 强制刷新
- **Mac**：Cmd + Shift + R
- **Windows/Linux**：Ctrl + Shift + R

#### 2. 禁用缓存刷新
- **Mac**：Cmd + Option + R
- **Windows/Linux**：Ctrl + Shift + Delete

#### 3. 查看移动端视图
1. 打开开发者工具（F12）
2. 点击设备图标（或按 Ctrl/Cmd + Shift + M）
3. 选择设备：
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1440px)

---

## 📋 快速检查清单

启动服务器后，检查以下内容：

### ✅ 服务器成功启动
- [ ] 看到 "Ready" 消息
- [ ] 看到本地地址（http://localhost:3000）
- [ ] 没有错误信息

### ✅ 首页正常显示
- [ ] 浏览器访问 localhost:3000 成功
- [ ] 页面完全加载
- [ ] 没有控制台错误

### ✅ 新的 UI 元素显示
- [ ] 看到 Hero Section（"AI 时代的系统设计工程师"）
- [ ] 看到"最新思考"区域
- [ ] 看到"关于我"区域
- [ ] 看到 Newsletter 表单
- [ ] 导航栏没有"资源"链接
- [ ] Footer 有 Email 链接

---

## 🔍 调试技巧

### 查看 console 错误
1. 打开开发者工具（F12）
2. 点击 "Console" 标签
3. 查看红色错误信息
4. 记录错误详情

### 查看网络请求
1. 打开开发者工具（F12）
2. 点击 "Network" 标签
3. 刷新页面
4. 查看所有请求
5. 检查是否有失败的请求（红色）

### 查看性能
1. 打开开发者工具（F12）
2. 点击 "Performance" 标签
3. 点击"录制"按钮（圆形图标）
4. 刷新页面
5. 停止录制
6. 分析性能数据

---

## 📊 测试流程

### 基础功能测试
1. **首页测试**
   - [ ] 滚动查看所有 4 个 Section
   - [ ] 测试 CTA 按钮点击
   - [ ] 测试 Email 输入框

2. **About 页面测试**
   - 访问 http://localhost:3000/zh/about
   - [ ] 查看所有内容
   - [ ] 测试所有链接

3. **语言切换测试**
   - 点击导航栏的"EN"按钮
   - [ ] 确认切换到英文
   - [ ] 确认 URL 变为 /en/
   - [ ] 点击"中"切回中文

4. **主题切换测试**
   - 点击主题切换按钮
   - [ ] 确认切换到浅色
   - [ ] 刷新页面确认主题保持

### 响应式设计测试
1. **移动端测试**
   - 打开开发者工具
   - 切换到移动设备视图（iPhone 12 Pro）
   - [ ] 确认布局适应移动端

2. **平板测试**
   - 切换到平板设备视图（iPad）
   - [ ] 确认布局适应平板

3. **桌面测试**
   - 切换回桌面视图
   - [ ] 确认布局适应桌面

---

## 🛠️ 常见问题解决

### 问题1：白屏
**可能原因**：
- JavaScript 错误
- 组件渲染失败

**解决步骤**：
1. 打开控制台查看错误
2. 检查组件是否正确导入
3. 检查 API 调用是否正常

### 问题2：样式丢失
**可能原因**：
- Tailwind CSS 未加载
- 样式文件路径错误

**解决步骤**：
1. 检查浏览器 Network 面板
2. 确认 Tailwind CSS 文件加载
3. 清除浏览器缓存（Cmd+Shift+R）

### 问题3：路由错误
**可能原因**：
- Next.js 路由配置问题
- 文件路径错误

**解决步骤**：
1. 检查 URL 是否正确
2. 检查文件是否存在
3. 重启开发服务器

---

## 🎯 完整测试流程

### 步骤1：启动服务器
```bash
cd /Users/niuniu/Documents/project/blog
npm run dev
```

### 步骤2：打开浏览器
访问：http://localhost:3000

### 步骤3：按照测试清单测试
参考：[local-testing-guide.md](computer:///Users/niuniu/Documents/project/blog/doc/local-testing-guide.md)

### 步骤4：记录问题
遇到问题时，记录：
1. 错误信息
2. 复现步骤
3. 浏览器信息
4. Node.js 版本

### 步骤5：修复问题
根据错误信息，修复代码后：
```bash
# 保存文件后，服务器会自动热重载
# 在浏览器中看到更新
```

---

## 📞 需要帮助？

### 如果以上方法都不工作

1. **检查 package.json**
```bash
cat package.json | grep -A 5 "scripts"
```

确认 `dev` 脚本正确配置。

2. **检查 next.config.js**
```bash
cat next.config.js
```

确认配置文件没有错误。

3. **查看 Next.js 文档**
https://nextjs.org/docs

---

## ✅ 启动成功标志

当你看到以下情况，说明启动成功：

1. ✅ 终端显示：
   ```
   ✓ Ready in X.Xs
   - Local: http://localhost:3000
   ```

2. ✅ 浏览器成功访问
   - 页面完全加载
   - 没有错误

3. ✅ 控制台无错误
   - Console 标签没有红色错误
   - 没有警告信息

---

**启动成功后，参考 [本地测试指南](computer:///Users/niuniu/Documents/project/blog/doc/local-testing-guide.md) 进行完整测试。** 🚀