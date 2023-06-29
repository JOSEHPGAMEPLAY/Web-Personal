import { Link } from 'react-router-dom';
import { experiencia } from '../../../data/InfoExperiencia'
import './Experiencia.css'

export default function Experiencia() {
  return (
    <div className='experiencia entrada'>
      <h1>PROYECTOS</h1>
      <div className='proContenido'>
        {experiencia.proyectos.map(valor=>{
          return(
            <div key={valor} className='proyectos m-5'>
              <h2>{valor[0]}</h2>
              <p>{valor[1]}</p>
              <Link to="/skills">
                <p className='Plink'>{valor[2]}</p>
              </Link>
            </div>
          )
        })}
      </div>
      <h1>EXPERIENCIA</h1>
        <img src={experiencia.experiencia[0]} alt="" />
    </div>
  )
}
