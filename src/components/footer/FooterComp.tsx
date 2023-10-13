import { Link } from 'react-router-dom'
import './Footer.css'

export const FooterComp = (): JSX.Element => {
  const urlSocialMedia = ''
  return (
    <article className='footer'>
      <h3>
      ¡Síguenos en nuestras redes sociales!{' '}
        <span>
          <Link to={urlSocialMedia} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><span>{'> Conéctate con nosotros <'} </span></Link>
        </span>
      </h3>
    </article>
  )
}
