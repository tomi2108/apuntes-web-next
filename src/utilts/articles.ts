export const parseArticleTitle = (title: string) => {
  const text = title.slice(0, -3)
  const normalCase = text.replace(
    /[A-Z]/g,
    (match) => ` ${match.toLowerCase()}`
  )
  const words = normalCase.split(' ')
  if (1 in words) { words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1) }
  return words.join(' ')
}
