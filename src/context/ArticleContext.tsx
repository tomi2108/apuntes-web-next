import { getArticles } from '@/services/articles'
import { Folder } from '@/types'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext<{ articles: Folder[] | null }>({
  articles: null
})

export const useArticles = () => {
  const [articles, setArticles] = useState<Array<Folder> | null>(null)

  useEffect(() => {
    getArticles().then(setArticles)
  }, [])

  return { articles }
}
