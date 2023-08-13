import Link from 'next/link'
import MathIcon from '../MathIcon'

interface CardProps {
  text: string
  icon: string
  path: string
}

const Card = ({ text, icon, path }: CardProps) => {
  return (
    <article>
      <MathIcon icon={icon} />
      <div>
        <Link href={path}>{text}</Link>
      </div>
    </article>
  )
}

export default Card
