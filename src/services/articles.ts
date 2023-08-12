import { Folder } from '@/types'
import axios from 'axios'
import { host } from './controller'

const url = `${host}/api/articles`

const getArticles = async () :Promise<Folder[]> => {
  return axios.get(url).then(res => res.data)
}

export { getArticles }
