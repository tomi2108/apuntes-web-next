import MarkdownRenderer from '@/components/MarkdownRenderer/MarkdownRenderer'
import TableOfContents from '@/components/TableOfContents/TableOfContents'
import { getArticles } from '@/services/articles'
import { useEffect, useState } from 'react'

interface Props {
  params: { title: string, folder: string }
}

export default function Article ({ params }: Props) {
  const [content, setContent] = useState<string>('')
  const { title, folder } = params
  const articles = getArticles()

  useEffect(() => {
    if (articles == null) return
    const folderObj = articles.find((article) => article.folder === folder)
    const fileObj = folderObj?.files.find((file) => file.title === title)
    setContent(fileObj?.content as string)
  }, [articles, title, folder])

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
