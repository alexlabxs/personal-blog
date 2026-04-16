import { codeToHtml } from 'shiki';
import { visit } from 'unist-util-visit';

// Shiki 主题配置
const shikiTheme = 'github-dark';

// 代码高亮配置
const highlightCode = [
  [
    // 自定义代码块处理
    function customCodeBlock() {
      return (tree: any) => {
        visit(tree, 'element', (node: any) => {
          if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
            const codeNode = node.children[0];
            const code = codeNode.children[0]?.value || '';
            const language = codeNode.properties?.className?.[0]?.replace('language-', '') || 'text';

            // 转换为HTML
            codeToHtml(code, {
              lang: language,
              theme: shikiTheme,
            }).then(html => {
              node.innerHTML = html;
            });
          }
        });
      };
    },
  ],
];

export const mdxOptions = {
  // 启用 remark 和 rehype 插件
  remarkPlugins: [],
  rehypePlugins: [
    // 代码高亮
    ...highlightCode,
    // 其他 rehype 插件可以在这里添加
  ],
  // Shiki 主题
  shiki: {
    theme: shikiTheme,
  },
};