#!/bin/bash
# 自动提交博客更改的脚本

BLOG_DIR="/root/github/personal-blog"
COMMIT_MSG="auto: 定时同步博客内容"

cd "$BLOG_DIR" || exit 1

# 检查是否有更改
if [[ -n $(git status --porcelain) ]]; then
    echo "检测到更改，正在提交..."
    git add -A
    git commit -m "$COMMIT_MSG $(date '+%Y-%m-%d %H:%M')"
    git pull --rebase origin main
    git push origin main
    echo "✅ 提交完成: $(date)"
else
    # 没有更改时静默退出，不输出日志
    exit 0
fi
