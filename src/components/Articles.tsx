import { useArticles } from '@/context/ArticleContext'
import Card from './Card/Card'

type ArticlesProps = {
  folder: string;
  isDisabled: boolean;
};

const Articles = ({ folder, isDisabled }: ArticlesProps) => {
  const { articles } = useArticles()
  const article = articles?.find((a) => a.folder === folder)

  const parseTitle = (title: string) => {
    const text = title.slice(0, -3)
    const normalCase = text.replace(
      /[A-Z]/g,
      (match) => ` ${match.toLowerCase()}`
    )
    const words = normalCase.split(' ')
    words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1)
    return words.join(' ')
  }

  const handleClick = (title: string) => {
    if (isDisabled) return
    navigate(`/articles/${folder}/${title}`)
  }

  return (
    <>
      {folder
        ? article?.files.map((f, index) => (
          <Card
            key={index}
            icon={f.icon}
            text={parseTitle(f.title)}
            onClick={() => handleClick(f.title)}
          />
        ))
        : null}
    </>
  )
}

export default Articles
