import { FooterComp } from '../components/footer/FooterComp'
import { HeaderComp } from '../components/header/HeaderComp'
import { Navbar } from '../components/navbar/Navbar'
import './Home.css'

export const HomePage = (): JSX.Element => {
  return (
    <section className="homepage">
      <HeaderComp />
      <Navbar />
      <section className="home-content">
        <article className="main-head">
          <h1 className="text-center">
            Exploradores del Código: Aprendiendo Juntos
          </h1>
        </article>
        <article className="cont-p">
          <p>
            ¡Bienvenidos a Exploradores del Código! Acompáñanos en un
            emocionante viaje de aprendizaje en programación y desarrollo web.
            Exploraremos juntos los fundamentos del código y la creación de
            sitios web, impulsados por la curiosidad y el deseo de aprender.
            Únete a nuestra comunidad y descubre el mundo del código a tu propio
            ritmo.
          </p>
          <p>
            En este blog, exploraremos juntos los fundamentos de la programación
            y la creación de sitios web, sin importar tu nivel de experiencia. A
            través de tutoriales y recursos prácticos, nos apoyaremos mutuamente
            en este emocionante viaje de aprendizaje.
          </p>
          <p>
            Si alguna vez te has preguntado cómo funciona el mundo del código o
            cómo se crean aplicaciones y sitios web, este es el lugar perfecto
            para aprender juntos. ¡Únete a nosotros y comencemos esta
            emocionante aventura!
          </p>
        </article>
        <section className="requirements">
          <h3>Requisitos:</h3>
          <ul>
            <li>
              <span>Un Ordenador</span>: Un ordenador de escritorio o portátil
              con un sistema operativo (Windows, macOS o Linux).
            </li>
            <li>
              <span>Navegador Web</span>: Google Chrome, Mozilla Firefox o
              Microsoft Edge, etc.
            </li>
            <li>
              <span>Conexión a Internet.</span>
            </li>
            <li>
              <span>Editor de Código</span>: Un editor de código o entorno de
              desarrollo integrado (IDE), como Visual Studio Code o similar.
            </li>
            <li>
              <span>¡Mucha Curiosidad y Ganas de Aprender!</span>: Lo más
              importante es tu deseo de explorar y aprender. Con la curiosidad
              como tu motor, estarás listo para enfrentar cualquier desafío y
              descubrir el mundo de la programación y el desarrollo web.
            </li>
          </ul>
        </section>
        <section className="resources">
          <h3>
            <span>Recursos</span>: Cada video que compartimos vendrá acompañado de una
            descripción detallada que incluirá enlaces y recursos adicionales
            relacionados.
          </h3>
        </section>
        <FooterComp />
      </section>
    </section>
  )
}
