import fs from 'fs'
import { type Article } from '@/types'

const markdownPath = './public/markdown'
const iconsPath = './public/icons'

const getArticles = () => {
  const files = fs.readdirSync(`${markdownPath}`)

  return files.map((folder) => {
    return {
      folder,
      files: getFiles(folder),
      icon: getFolderIcon(folder)
    }
  })
}

const getFiles = (folder: string): Article[] => {
  const markdownFiles = fs.readdirSync(`${markdownPath}/${folder}`)

  return markdownFiles.map((file) => {
    return {
      title: file,
      content: getContent(folder, file),
      icon: getFileIcon(folder, file)
    }
  })
}

const getContent = (folder: string, fileName: string) => {
  return fs.readFileSync(`${markdownPath}/${folder}/${fileName}`).toString()
}

const getFolderIcon = (folder: string) => {
  return fs.readFileSync(`${iconsPath}/${folder}/folder.md`).toString()
}

const getFileIcon = (folder: string, file: string): string => {
  try {
    return fs.readFileSync(`${iconsPath}/${folder}/${file}`).toString()
  } catch {
    return fs
      .readFileSync(`${iconsPath}/${folder}/${file.slice(0, -3)}.svg`)
      .toString()
  }
}

export { getArticles }
