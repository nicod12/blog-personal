import { HeaderComp } from '../../components/header/HeaderComp'
import IntroComponent from '../../components/introComp/IntroComponent'
import { Navbar } from '../../components/navbar/Navbar'
import './IntroPage.css'

export const IntroPage = (): JSX.Element => {
  return (
    <section className="intropag">
      <HeaderComp />
      <Navbar />
      <IntroComponent />
    </section>
  )
}
