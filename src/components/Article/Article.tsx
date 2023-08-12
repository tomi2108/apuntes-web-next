import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer'
import TableOfContents from '../TableOfContents/TableOfContents'

type ArticleProps = {
  markdownContent: string;
};

const Article = ({ markdownContent }: ArticleProps) => {
  return (
    <section className='article'>
      <TableOfContents markdownContent={markdownContent} />
      <MarkdownRenderer markdownContent={markdownContent} />
    </section>
  )
}

export default Article
