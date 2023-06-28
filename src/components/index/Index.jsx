import { InfoIndex } from '../../data/InfoIndex';
import './Index.css';

export default function Index() {
  return (
    <div className="indexC entrada" >
      <div className='imgCI'>
        <img src={InfoIndex.img} className="imagenI"></img>
      </div>
      <div className="tituloCI">
        <h1 className='tituloP cambiaP1 mb-16'>
          {InfoIndex.nombre}
        </h1>
        <h1 className='tituloP cambiaP2'>
          {InfoIndex.titulo}
        </h1>
      </div>
      <div className="infoI">
        <h2>
          {InfoIndex.titulo2}
        </h2>
        <p >
          {InfoIndex.contenido2}
        </p>        
        <br />
        <ul>
          {InfoIndex.lista2.map((lista)=>
               <li key={lista}>{lista}</li>
            )
          }
        </ul>
        <br />
        <h2>
          {InfoIndex.titulo3}
        </h2>
        <p>
          {InfoIndex.contenido3}
        </p>
        <br />
        <ul className='lista'>  
        {InfoIndex.lista3.map((lista)=>
               <li key={lista} className='listaI'>{lista}</li>
            )
          }
        </ul>
      </div>
    </div>
  )
}
