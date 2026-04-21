# 图片资源目录

## 目录结构

```
public/images/
├── posts/              # 博客文章图片
│   └── 2026/          # 按年份分类
│       └── example-post/
│           ├── cover.webp
│           └── diagram.png
├── projects/           # 项目截图
│   ├── project-name/
│   │   ├── cover.png
│   │   ├── screenshot-1.png
│   │   └── screenshot-2.png
│   └── another-project/
├── avatar/             # 个人头像
│   ├── profile.png     # 主要头像 (建议 400x400)
│   └── profile-small.png  # 小头像 (建议 100x100)
└── og/                 # Open Graph 图片 (社交分享)
    ├── default.png     # 默认 OG 图 (1200x630)
    └── home.png        # 首页 OG 图
```

## 图片规范

### 格式建议
- **WebP**: 首选格式，体积最小
- **PNG**: 透明背景、截图
- **JPEG**: 照片类内容
- **SVG**: 图标、Logo

### 尺寸建议
- **博客封面**: 1200 x 630 (2:1)
- **项目截图**: 1920 x 1080 或 1600 x 900
- **头像**: 400 x 400 (1:1)
- **OG 图片**: 1200 x 630 (必需)

### 命名规范
- 使用小写字母
- 单词用连字符分隔: `my-image-name.png`
- 避免空格和特殊字符
