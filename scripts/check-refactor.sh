#!/bin/bash

# 个人博客重构快速检查脚本
# 用途：快速检查重构后的代码状态

echo "🔍 正在检查个人博客重构状态..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. 检查当前分支
echo "📌 1. 检查当前 Git 分支..."
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
if [ "$CURRENT_BRANCH" = "refactor/editorial-design" ]; then
    echo "   ${GREEN}✓ 当前分支: $CURRENT_BRANCH${NC}"
else
    echo "   ${RED}✗ 当前分支: $CURRENT_BRANCH (应该是 refactor/editorial-design)${NC}"
    echo "   ${YELLOW}提示: 运行 'git checkout refactor/editorial-design'${NC}"
fi
echo ""

# 2. 检查修改的文件
echo "📁 2. 检查修改的文件..."
git status --short
echo ""

# 3. 检查新组件
echo "🔧 3. 检查新组件文件..."
NEW_COMPONENTS=(
    "components/hero/HeroV2.tsx"
    "components/home/FeaturedWriting.tsx"
)

for component in "${NEW_COMPONENTS[@]}"; do
    if [ -f "$component" ]; then
        echo "   ${GREEN}✓${NC} $component"
    else
        echo "   ${RED}✗${NC} $component (缺失)"
    fi
done
echo ""

# 4. 检查配置文件
echo "⚙️  4. 检查配置文件更新..."
CONFIG_FILE="lib/config-i18n.ts"
if grep -q "AI 时代的系统设计工程师" "$CONFIG_FILE"; then
    echo "   ${GREEN}✓${NC} 配置文件已更新为新定位"
else
    echo "   ${RED}✗${NC} 配置文件未更新"
fi
echo ""

# 5. 检查 SEO 文件
echo "🔍 5. 检查 SEO 元数据..."
SEO_FILE="lib/seo/metadata.ts"
if grep -q "AI 时代的系统设计工程师" "$SEO_FILE"; then
    echo "   ${GREEN}✓${NC} SEO 元数据已更新"
else
    echo "   ${RED}✗${NC} SEO 元数据未更新"
fi
echo ""

# 6. 检查首页
echo "🏠 6. 检查首页文件..."
HOME_PAGE="app/[lang]/page.tsx"
if grep -q "HeroV2" "$HOME_PAGE"; then
    echo "   ${GREEN}✓${NC} 首页已重构（使用 HeroV2）"
else
    echo "   ${RED}✗${NC} 首页未重构"
fi

if ! grep -q "resources" "$HOME_PAGE" && ! grep -q "resources" "components/Header.tsx"; then
    echo "   ${GREEN}✓${NC} 导航栏已更新（移除资源链接）"
else
    echo "   ${YELLOW}⚠${NC} 导航栏可能未完全更新"
fi
echo ""

# 7. 检查 Footer
echo "📄 7. 检查 Footer 组件..."
FOOTER_FILE="components/Footer.tsx"
if grep -q "mailto:" "$FOOTER_FILE"; then
    echo "   ${GREEN}✓${NC} Footer 已添加 Email 链接"
else
    echo "   ${RED}✗${NC} Footer 未添加 Email 链接"
fi

if ! grep -q "resources" "$FOOTER_FILE"; then
    echo "   ${GREEN}✓${NC} Footer 已移除资源链接"
else
    echo "   ${YELLOW}⚠${NC} Footer 可能未完全更新"
fi
echo ""

# 8. 检查 About 页面
echo "👤 8. 检查 About 页面..."
ABOUT_PAGE="app/[lang]/about/page.tsx"
if grep -q "为什么我的观点值得听" "$ABOUT_PAGE"; then
    echo "   ${GREEN}✓${NC} About 页面已重构"
else
    echo "   ${RED}✗${NC} About 页面未重构"
fi
echo ""

# 9. TypeScript 检查
echo "🔷 9. TypeScript 类型检查..."
echo "   正在运行 TypeScript 检查..."
npx tsc --noEmit 2>&1 | grep -E "error TS" | wc -l | xargs
TS_ERRORS=$(npx tsc --noEmit 2>&1 | grep -E "error TS" | wc -l | tr -d ' ')
if [ "$TS_ERRORS" = "0" ]; then
    echo "   ${GREEN}✓${NC} TypeScript 检查通过，没有类型错误"
else
    echo "   ${RED}✗${NC} 发现 $TS_ERRORS 个 TypeScript 错误"
    echo "   ${YELLOW}提示: 运行 'npx tsc --noEmit' 查看详情${NC}"
fi
echo ""

# 10. 总结
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 检查总结"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "下一步操作："
echo "  1. 启动开发服务器:"
echo "     ${GREEN}npm run dev${NC}"
echo ""
echo "  2. 打开浏览器测试:"
echo "     ${GREEN}open http://localhost:3000${NC}"
echo ""
echo "  3. 参考测试指南:"
echo "     ${GREEN}open doc/local-testing-guide.html${NC}"
echo ""
echo "  4. 参考部署检查清单:"
echo "     ${GREEN}open doc/deployment-checklist.html${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
