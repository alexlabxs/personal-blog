import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: '博客文章',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '标题', validation: { length: { min: 1 } } } }),
        description: fields.text({
          label: '描述',
          validation: { length: { min: 1 } },
        }),
        date: fields.date({ label: '发布日期', defaultValue: { kind: 'today' } }),
        tags: fields.array(
          fields.text({ label: '标签' }),
          { label: '标签', itemLabel: (item) => item.value }
        ),
        readingTime: fields.integer({ label: '阅读时间(分钟)', defaultValue: 5 }),
        published: fields.checkbox({ label: '已发布', defaultValue: true }),
        featured: fields.checkbox({ label: '推荐文章', defaultValue: false }),
        content: fields.document({
          label: '内容',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
          tables: true,
          code: {
            schema: 'normal',
            block: true,
          },
        }),
      },
    }),
    resources: collection({
      label: '资源',
      slugField: 'name',
      path: 'content/resources/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: '名称' } }),
        description: fields.text({ label: '描述', multiline: true }),
        url: fields.url({ label: '链接' }),
        category: fields.select({
          label: '分类',
          options: [
            { value: 'dev', label: '开发工具' },
            { value: 'ai', label: 'AI 资源' },
            { value: 'learning', label: '学习资源' },
            { value: 'design', label: '设计资源' },
            { value: 'community', label: '社区平台' },
          ],
          defaultValue: 'dev',
        }),
        tags: fields.array(
          fields.text({ label: '标签' }),
          { label: '标签' }
        ),
        featured: fields.checkbox({ label: '推荐', defaultValue: false }),
      },
    }),
  },
});
