import MathIcon from '../MathIcon'

interface CardProps {
  text: string
  icon: string
}

const Card = ({ text, icon }: CardProps) => {
  return (
    <article>
      <MathIcon icon={icon} />
      <div>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default Card
