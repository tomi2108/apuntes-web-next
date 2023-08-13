import Card from '@/components/Card/Card'
import { getArticles } from '@/services/articles'
import { parseArticleTitle } from '@/utilts/articles'

interface Props {
  params: { folder: string }
}

export default function Articles ({ params }: Props) {
  const { folder } = params
  const articles = getArticles()

  const article = articles?.find((a) => a.folder === folder)

  // const handleClick = (title: string) =>
  //   navigate(`/articles/${folder}/${title}`)

  return (
    <>
      {(folder !== '')
        ? article?.files.map((f, index) => (
          <Card
            key={index}
            icon={f.icon}
            text={parseArticleTitle(f.title)}
          />
        ))
        : null}
    </>
  )
}
