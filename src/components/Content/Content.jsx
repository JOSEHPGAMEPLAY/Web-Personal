
import Rutas from "../routes/routes";
import { useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import { InfRutas } from "../../data/infoRutas";
import "./Content.css"

function Contenido() {

  const [NexR, setNexR] = useState(InfRutas[0]);

  const location = useLocation();
  
  function CambioMen(){
    const num = InfRutas.findIndex((ubi)=>ubi==location.pathname);
    if(num<1){
      setNexR(InfRutas[num])
    }
    else{
      console.log(num)
      setNexR(InfRutas[num-1])
    }
  }
  
  function CambioMas(){
    const num = InfRutas.findIndex((ubi)=>ubi==location.pathname);
    if(num>5){
      setNexR(InfRutas[num])
    }
    else{
      console.log(num)
      setNexR(InfRutas[num+1])
    }
  }

  return (
    <div className="contenido">

      <Link to={NexR} className="place-self-center inset-y-1/2 left-0 ocultar" onClickCapture={CambioMen}>
        <button className="Bizquierda" >
          <svg xmlns="http://www.w3.org/2000/svg" className="IconDir" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </Link>
            
      <div className="componente">
        <Rutas />
      </div>

      <Link to={NexR} className="self-center inset-y-1/2 right-0 ocultar" onClickCapture={CambioMas}>
        <button className="Bderecha" >
          <svg xmlns="http://www.w3.org/2000/svg" className="IconDir" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </button>
      </Link>
    </div>
  )
}
export default Contenido;