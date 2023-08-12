export interface Article {
  icon: string
  title: string
  content: string
}

export interface Folder {
  folder: string
  files: Article[]
  icon: string
}
