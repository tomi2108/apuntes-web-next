import { type Node, toString } from 'hast-util-to-string'
import { toHast } from 'mdast-util-to-hast'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import generateId from 'uuid-by-string'

const TableOfContents = ({ markdownContent }: { markdownContent: string }) => {
  const getContent = () => {
    if (markdownContent === '') return
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)

    const tree = processor.parse(markdownContent)

    const tocNodes = tree.children.filter(node => node.type === 'heading' && node.depth <= 2)

    const tocItems = tocNodes?.map((item) => {
      // @ts-expect-error
      const title = toString(toHast(item) as Node)
      const id = generateId(title)
      return { title, id, depth: (item as { depth: number }).depth }
    })
    return tocItems
  }

  const toc = getContent()
  return (
    <nav className='table-of-contents'>
      <ul>
        {(toc != null)
          ? toc.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>
                {item.title}
              </a>
            </li>
          ))
          : null}
      </ul>
    </nav>
  )
}

export default TableOfContents
