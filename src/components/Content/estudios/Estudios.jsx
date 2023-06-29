import { InfoEstudios } from '../../../data/InfoEstudios';
import './Estudios.css';

export default function Estudios() {
  return (
    <div className="estudios entrada">
      <h1 className='titulo'>Estudios</h1>
            <div className='cursos'>
        {InfoEstudios.Estudios.map((respuesta)=>{
          return(
            <div className='curso' key={respuesta.key}>
              <img src={respuesta[0]} 
              className="imagen animate-jump-low animate-infinite animate-duration-[10000ms]" alt={respuesta[2]} />
              <div className='datosCurso'>
                <p>
                  <b>{respuesta[1]}</b>
                  <br />
                    {respuesta[2]}
                  <br />
                    {respuesta[3]}
                </p>
              </div>
           </div>
          )
        }
        )}
           </div>
      <h1 className='titulo'>Cursos</h1>
            <div className='cursos' >
      {InfoEstudios.Cursos.map((respuesta)=>{
          return(
            <div className='curso' key={respuesta.key}>
              <img src={respuesta[0]} 
              className="imagen animate-jump-low animate-infinite animate-duration-[10000ms]" alt={respuesta[2]} />
              <div className='datosCurso'>
                <p>
                  <b>{respuesta[1]}</b>
                  <br />
                    {respuesta[2]}
                  <br />
                    {respuesta[3]}
                </p>
              </div>
           </div>
          )
        }
        )}
           </div>
    </div>
  )
}
