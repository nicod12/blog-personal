import { Link } from 'react-router-dom'

const menuItems = [
  { title: 'Inicio', link: '/' },
  { title: 'Programación Básica', link: '/programacion-basica' },
  { title: 'JavaScript', link: '/javascript' },
  { title: 'HTML', link: '/html' },
  { title: 'CSS', link: '/css' },
  { title: 'React JS', link: '/react-js' },
  { title: 'Tdd', link: '/tdd' }
]

export const MenuItems = (): JSX.Element => {
  return (
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className='dec-none'>
                <h2>{item.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
  )
}
