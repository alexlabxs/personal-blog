import { MDXComponents } from 'mdx/types';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { CustomImage } from '@/components/Image';
import { YouTube } from '@/components/YouTube';
import { Twitter } from '@/components/Twitter';

export const components: MDXComponents = {
  // 代码块
  code: CodeBlock,

  // 引用块
  blockquote: Callout,

  // 图片
  img: CustomImage,

  // YouTube 视频
  YouTube,

  // Twitter 嵌入
  Twitter,

  // 其他自定义组件可以在这里添加
};