import { useState } from 'react'
import { MenuItems } from '../items/MenuItems'
import './Navbar.css'

export const Navbar = (): JSX.Element => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = (): void => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`sidenav ${isSidebarOpen ? 'open' : ''}`}>
     <div className='cont-btn'>
      <button className='primary toggle-button' onClick={toggleSidebar}>
          {'> | <'}
        </button>
     </div>
      <MenuItems />
    </div>
  )
}
