import Card from '@/components/Card/Card'
import { getArticles } from '@/services/articles'

const Subjects = async () => {
  const articles = getArticles()

  const folders = articles.map((a) => ({ title: a.folder, icon: a.icon }))

  return (
    <main>
      <section>
        {
          folders.map((f, index) =>
            <Card
              path={`/articles/${f.title}`}
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
