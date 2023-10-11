import { HeaderComp } from '../components/header/HeaderComp'
import { Navbar } from '../components/navbar/Navbar'
import './Home.css'

export const HomePage = (): JSX.Element => {
  return (
    <div className='homepage'>
      <HeaderComp />
      <Navbar />
      <section className='home-content'>
        <h2>hola</h2>
      </section>
    </div>
  )
}
