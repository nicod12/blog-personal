import { HeaderComp } from '../components/header/HeaderComp'
import { Navbar } from '../components/navbar/Navbar'
import './Home.css'

export const HomePage = (): JSX.Element => {
  return (
    <section className='homepage'>
      <HeaderComp />
      <Navbar />
      <section className='home-content'>
        <article className='main-head'>
          <h1 className='text-center'>Exploradores del Código: Aprendiendo Juntos</h1>
        </article>
        <article className='cont-p'>
          <p>¡Bienvenidos a un emocionante viaje de aprendizaje en programación! Este blog es tu compañero en el camino desde cero hasta convertirte en un hábil desarrollador web. Juntos, exploraremos los fundamentos de la programación y la creación de sitios web, impulsados por la curiosidad y el deseo de aprender. Únete a nuestra comunidad y descubre el increíble mundo del código.</p>
        </article>
        <section className='requirements'>
          <h3>Requisitos:</h3>
         <ul>
          <li>Un Ordenador: Un ordenador de escritorio o portátil con un sistema operativo (Windows, macOS o Linux).</li>
          <li>Navegador Web: Google Chrome, Mozilla Firefox o Microsoft Edge, etc.</li>
          <li>Conexión a Internet.</li>
          <li>Editor de Código: Un editor de código o entorno de desarrollo integrado (IDE), como Visual Studio Code o similar.</li>
          <li>¡Mucha Curiosidad y Ganas de Aprender!: Lo más importante es tu deseo de explorar y aprender. Con la curiosidad como tu motor, estarás listo para enfrentar cualquier desafío y descubrir el mundo de la programación y el desarrollo web.</li>
         </ul>
        </section>
      </section>
    </section>
  )
}
