import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link href='/'>Materias</Link>
        <Link href='/articles'>Apuntes</Link>
      </ul>
    </nav>

  )
}

export default NavBar
