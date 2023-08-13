import Card from '@/components/Card/Card'
import { getArticles } from '@/services/articles'
import { parseArticleTitle, parseParam } from '@/utilts/articles'

interface Props {
  params: { folder: string }
}

export default function Articles ({ params }: Props) {
  const { folder } = params
  const articles = getArticles()
  const folderTitle = parseParam(folder)
  const article = articles?.find((a) => a.folder === folderTitle)

  return (
    <>
      <Card
        path='/'
        key={-1}
        icon='$$\leftarrow$$'
        text='Materias'
      />
      {(folder !== '')
        ? article?.files.map((file, index) => (
          <Card
            path={`/articles/${folderTitle}/${file.title}`}
            key={index}
            icon={file.icon}
            text={parseArticleTitle(file.title)}
          />
        ))
        : null}
    </>
  )
}
