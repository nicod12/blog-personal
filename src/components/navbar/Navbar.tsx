import { MenuItems } from '../items/MenuItems'
import './Navbar.css'

export const Navbar = (): JSX.Element => {
  return (
    <div className='sidenav'>
        <MenuItems />
    </div>
  )
}
