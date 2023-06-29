import { Link } from 'react-router-dom';
import { experiencia } from '../../../data/InfoExperiencia'
import './Experiencia.css'

export default function Experiencia() {
  return (
    <div className='experiencia entrada'>
      <h1>Proyectos</h1>
        {experiencia.proyectos.map(valor=>{
          return(
            <div key={valor} className='proyectos'>
              <h2>{valor[0]}</h2>
              <p>{valor[1]}</p>
              <Link to="/skills">
                <p className='Plink'>{valor[2]}</p>
              </Link>
            </div>
          )
        })}
        <h1>Experiencia</h1>
        <img src={experiencia.experiencia[0]} alt="" />
    </div>
  )
}
