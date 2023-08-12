import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify/lib'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import generateId from 'uuid-by-string'

const MarkdownRenderer = ({ markdownContent }: { markdownContent: string }) => {
  const getContent = () => {
    if (markdownContent === '') return ''
    const processor = unified()
      .use(remarkParse)
      .use(remarkMath, { singleDollarTextMath: true })
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeStringify)
    const tree = processor.parse(markdownContent)
    const hastTree = processor.runSync(tree)
    const toAdd: any[] = []
    hastTree?.children.forEach((e, i) => {
      if ((e as { tagName: string }).tagName === 'h1' || (e as { tagName: string }).tagName === 'h2') {
        toAdd.push({
          index: i,
          value: {
            type: 'element',
            tagName: 'span',
            properties: {
              class: 'anchor',
              id: generateId((e as unknown as { children: [{ value: string }] }).children[0].value)
            }
          }
        })
      }
    })
    toAdd.forEach((e) => hastTree.children.splice(e.index, 0, e.value))
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return processor.stringify(hastTree) as unknown as string
  }

  return (
    <article dangerouslySetInnerHTML={{ __html: getContent() }} />
  )
}

export default MarkdownRenderer
