import { Link } from 'react-router-dom'

const menuItems = [
  { title: 'Inicio', link: '/' },
  {
    title: 'Introducción - Programación',
    link: '/introduccion-a-la-programacion'
  },
  { title: 'HTML', link: '/html', disabled: true },
  { title: 'CSS', link: '/css', disabled: true },
  { title: 'JavaScript', link: '/javascript', disabled: true }
  // { title: 'Tdd', link: '/tdd', disabled: true },
  // { title: 'React JS', link: '/react-js', disabled: true }
]

export const MenuItems = (): JSX.Element => {
  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index}>
          {item.disabled !== undefined && item.disabled ? (
            <div className="disabled-link">
              <h2>{item.title}</h2>
            </div>
          ) : (
            <Link to={item.link} className="dec-none">
              <h2>{item.title}</h2>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
