import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify/lib'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype/lib'
import { unified } from 'unified'

const isSvg = (icon: string): boolean => {
  return icon.includes('svg')
}

export default function MathIcon ({ icon }: { icon: string }) {
  const getContent = () => {
    if (isSvg(icon)) return icon

    const processor = unified()
      .use(remarkParse)
      .use(remarkMath, { singleDollarTextMath: true })
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeStringify)
    const tree = processor.parse(icon)
    const hastTree = processor.runSync(tree)
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return processor.stringify(hastTree) as unknown as string
  }

  return <div dangerouslySetInnerHTML={{ __html: getContent() }} />
}
