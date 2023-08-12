import { getArticles } from '@/services/articles'

const Subjects = async () => {
  const articles = await getArticles()

  const folders: Array<{ folder: string; icon: string }> =
    articles.map((a) => ({
      folder: a.folder,
      icon: a.icon
    }))

  const [selectedFolder, setSelectedFolder] = useState<string>('')
  const [foldersElem, setFoldersElem] = useState<Element | null>(null)
  const [articlesElem, setArticlesElem] = useState<Element | null>(null)

  useEffect(() => {
    setFoldersElem(document.querySelector('.folders'))
    setArticlesElem(document.querySelector('.articles'))
  }, [])

  const { viewFirstElement, viewSecondElement, transitioning } = useSlider([
    foldersElem,
    articlesElem
  ])

  const handleFolderChange = (folder: string) => {
    if (transitioning) return
    viewSecondElement()
    setSelectedFolder(folder)
  }

  const handleBackButton = () => {
    if (transitioning) return
    viewFirstElement()
  }

  return (
    <div>
      <div>
        {folders
          ? folders.map((folder, index) => {
            return (
              <Card
                key={index}
                text={folder.folder}
                icon={folder.icon}
                onClick={handleFolderChange}
              />
            )
          })
          : null}
      </div>
      <div>
        <Card
          key={-1}
          text='Materias'
          onClick={handleBackButton}
          icon={'$$\n\\leftarrow\n$$'}
        />
        <Articles isDisabled={transitioning} folder={selectedFolder} />
      </div>
    </div>
  )
}

export default Subjects
