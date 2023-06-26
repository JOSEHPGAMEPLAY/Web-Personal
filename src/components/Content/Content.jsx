
import Rutas from "../routes/routes";
import { useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import { InfRutas } from "../../data/infoRutas";
import "./Content.css"
import 'animate.css'


function Contenido() {

  const [tiempo, settiempo] = useState(true);
  const [entrada, setentrada] = useState('entrada');

  const [NexR, setNexR] = useState(InfRutas[0]);

  const location = useLocation();

  function CambioMen(){
    const num = InfRutas.findIndex((ubi)=>ubi==location.pathname);
    if(num<1){
      setNexR(InfRutas[num])
    }
    else{
      setNexR(InfRutas[num-1])
      setentrada(" animate-backInLeft animate-duration-1500 animate-ease-in-out animate-fill-forwards")
      settiempo(false);
      setTimeout(() => {
        settiempo(true);
      }, 3000);
    }
  }
  
  function CambioMas(){
    const num = InfRutas.findIndex((ubi)=>ubi==location.pathname);
    if(num>4){
      setNexR(InfRutas[num])
    }
    else{
      setNexR(InfRutas[num+1])
      setentrada(" animate-backInRight animate-duration-1000 animate-ease-in-out animate-fill-forwards")
      settiempo(false);
        setTimeout(() => {
          settiempo(true);
        }, 1000);
    }
  }

  return (
    <div className="contenido">

      <Link to={NexR} className="Boton ocultar" onClickCapture={CambioMen}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="IconDir" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </Link>
            
      <div className={tiempo?"componente":"componente "+entrada}>
        <Rutas />
      </div>

      <Link to={NexR} className="Boton ocultar" onClickCapture={CambioMas}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="IconDir" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </Link>

    
    </div>
  )
}
export default Contenido;