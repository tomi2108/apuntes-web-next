import MarkdownRenderer from '@/components/MarkdownRenderer/MarkdownRenderer'
import TableOfContents from '@/components/TableOfContents/TableOfContents'
import { getArticles } from '@/services/articles'
import { type Article as ArticleType } from '@/types'
import { parseParam } from '@/utilts/articles'

interface Props {
  params: { title: string, folder: string }
}

export default function Article ({ params }: Props) {
  const { title, folder } = params
  const parsedTitle = parseParam(title)
  const parsedFolder = parseParam(folder)

  const articles = getArticles()

  const getContent = () => {
    const folderObj = articles.find((article) => article.folder === parsedFolder)
    const { content } = folderObj?.files.find((file) => file.title === parsedTitle) as ArticleType
    return content
  }

  const content = getContent()

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section>
        <TableOfContents markdownContent={content} />
      </section>
      <section>
        <MarkdownRenderer markdownContent={content} />
      </section>
    </main>
  )
}
