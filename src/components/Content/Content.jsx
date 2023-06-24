
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

      <Link to={NexR} className="self-center" onClickCapture={CambioMen}>
        <button className="Bizquierda" >
          <svg xmlns="http://www.w3.org/2000/svg" className="IconIzq" height="48" viewBox="0 -960 960 960" width="48"><path d="M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z"/></svg>
        </button>
      </Link>
            
      <div className="componente">
        <Rutas />
      </div>

      <Link to={NexR} className="self-center" onClickCapture={CambioMas}>
        <button className="Bderecha" >
          <svg xmlns="http://www.w3.org/2000/svg" className="IconDer" height="48" viewBox="0 -960 960 960" width="48"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>
        </button>
      </Link>
    </div>
  )
}
export default Contenido;