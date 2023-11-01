import { HeaderComp } from '../../components/header/HeaderComp'
import { Navbar } from '../../components/navbar/Navbar'
import './IntroPage.css'

export const IntroPage = (): JSX.Element => {
  return (
    <section className='intropag'>
      <HeaderComp />
      <Navbar />
      <section className='intro-content'>
        <article className='logic-artic'>
          <h2 className="heading">¿Qué es la lógica?</h2>
          <p>
            Definimos a la lógica como el estudio de los principios y métodos
            utilizados para distinguir el razonamiento correcto del incorrecto.
            La lógica es el estudio de los principios y métodos utilizados para
            distinguir el razonamiento correcto del incorrecto. Se enfoca en
            cómo analizamos información, evaluamos argumentos y llegamos a
            conclusiones de manera precisa y coherente. La lógica nos ayuda a
            evitar errores en el pensamiento y a tomar decisiones informadas
            basadas en la evidencia y el razonamiento sólido.
          </p>
        </article>
        <article className='prepositions-content'>
          <h2 className="heading">Proposiciones Lógicas</h2>
          <p>
            Las proposiciones lógicas son afirmaciones que pueden ser verdaderas
            o falsas. Estas afirmaciones se utilizan en lógica para representar
            situaciones de la vida real. Aquí tienes una explicación sencilla:
          </p>
          <p>
            {' '}
            Imagina que tienes una afirmación como "Hace sol". Esto es una
            proposición lógica. Puede ser verdadera si actualmente hay sol
            afuera, o puede ser falsa si está nublado o es de noche.
          </p>
          <h2 className='heading m-t'>Tipos de proposiciones</h2>
          <article className='type-prepositions m-t'>
            <h3 className="heading">Preposiciones simples:</h3>
            <p>
              Las proposiciones simples son afirmaciones básicas que pueden ser
              verdaderas o falsas, pero no se descomponen en otras proposiciones.
            </p>
            <p>
              {''}
              "El cielo es azul" - Puede ser verdadero si el cielo es azul en un
              momento dado o falso si el cielo tiene otro color.
            </p>
            <h3 className='heading m-t'>Preposiciones compuestas:</h3>
            <p>
              Las proposiciones compuestas son afirmaciones que se crean al
              combinar proposiciones simples utilizando conectivas lógicas.
            </p>
            <p>
              {''}
              "Si llueve, entonces llevaré un paraguas" - En esta proposición
              compuesta, "Si llueve" y "llevaré un paraguas" son proposiciones
              simples, y la conectiva "entonces" las une para formar una
              proposición compuesta condicional.
            </p>
            <table className='custom-table m-t'>
              <tr>
                  <th>Información</th>
                  <th>Tipo</th>
              </tr>
              <tr>
                  <td>Jorge Luis Borges es un escritor</td>
                  <td>Simple</td>
              </tr>
              <tr>
                  <td>Ficciones</td>
                  <td>Compuesta</td>
              </tr>
              <tr>
                  <td>Sen(x) no es un número mayor que 1</td>
                  <td>Compuesta</td>
              </tr>
              <tr>
                  <td>Los números 3 y 7 son números primos</td>
                  <td>Simple</td>
              </tr>
              <tr>
                  <td>3 es número primo y 7 también es número primo</td>
                  <td>Compuesta</td>
              </tr>
            </table>
          </article>
        </article>
      </section>
    </section>
  )
}
