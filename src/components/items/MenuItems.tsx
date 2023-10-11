import { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { title: 'Inicio', link: '/' },
  { title: 'Programación Básica', link: '/introduccion-a-la-programacion' },
  { title: 'JavaScript', link: '/javascript', disabled: true },
  { title: 'HTML', link: '/html', disabled: true },
  { title: 'CSS', link: '/css', disabled: true },
  { title: 'React JS', link: '/react-js', disabled: true },
  { title: 'Tdd', link: '/tdd', disabled: true }
]

export const MenuItems = (): JSX.Element => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<number | null>(null)

  const handleMenuItemClick = (index: number): void => {
    setSelectedMenuItem(index)
  }

  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index}>
          {item.disabled !== undefined && item.disabled ? (
            <div className="disabled-link">
              <h2>{item.title}</h2>
            </div>
          ) : (
            <Link
              to={item.link}
              className={`dec-none ${selectedMenuItem === index ? 'active' : ''}`}
              onClick={() => {
                handleMenuItemClick(index)
              }}
            >
              <h2>{item.title}</h2>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
