import { InfoEstudios } from '../../../data/InfoEstudios';
import './Estudios.css';

export default function Estudios() {
  return (
    <div className="estudios entrada">
      <h1 className='titulo'>ESTUDIOS</h1>
            <div className='cursos'>
        {InfoEstudios.Estudios.map((respuesta)=>{
          const redirectToPage = () => {
            window.open(respuesta[4]);
          };
          return(
            <div className='curso ' key={respuesta.key}>
              <img src={respuesta[0]} 
              className="imagen animate-jump-low animate-infinite animate-duration-[10000ms] cursor-pointer" 
              alt={respuesta[2]} onClickCapture={redirectToPage} />
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
      <h1 className='titulo'>CURSOS</h1>
            <div className='cursos' >
      {InfoEstudios.Cursos.map((respuesta)=>{
        const redirectToPage = () => {
            window.open(respuesta[4]);
          };
          return(
            <div className='curso' key={respuesta.key}>
              <img src={respuesta[0]} 
              className="imagen animate-jump-low animate-infinite animate-duration-[10000ms] cursor-pointer" 
              alt={respuesta[2]} onClickCapture={redirectToPage}/>
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
