import Card from '@/components/Card/Card'
import { getArticles } from '@/services/articles'

const Subjects = async () => {
  const articles = getArticles()

  const folders = articles.map((a) => ({ title: a.folder, icon: a.icon }))

  return (
    <main>
      <section>
        <Card
          key={-1}
          icon='$$\n\\leftarrow\n$$'
          text='Materias'
        />
        {
          folders.map((f, index) =>
            <Card
              key={index}
              icon={f.icon}
              text={(f.title)}
            />
          )
        }

      </section>
    </main>
  )
}

export default Subjects
