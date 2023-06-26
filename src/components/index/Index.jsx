import { InfoIndex } from '../../data/InfoIndex';
import './Index.css';

export default function Index() {
  return (
    <div className="indexC" >
      <div className='imgCI'>
        <img src={InfoIndex.img} className="imagenI"></img>
      </div>
      <div className="tituloCI">
        <h1 className='tituloP text-[45px]'>
          {InfoIndex.nombre}
        </h1>
        <h1 className='tituloP'>
          {InfoIndex.titulo}
        </h1>
      </div>
      <div className="infoI">
        
        <h2 className='tituloS'>
          {InfoIndex.titulo2}
        </h2>
        <p className='texto'>
          {InfoIndex.contenido2}
        </p>        
        <br />
        <ul className='lista'>
          {InfoIndex.lista2.map((lista)=>
               <li key={lista} className='listaI'>{lista}</li>
            )
          }
        </ul>
        <br />
        <h2 className='tituloS'>
          {InfoIndex.titulo3}
        </h2>
        <p className='texto'>
          {InfoIndex.contenido3}
        </p>
        <br />
        <ul className='lista'>  
        {InfoIndex.lista3.map((lista)=>
               <li key={lista} className='listaI'>{lista}</li>
            )
          }
        </ul>
        <br />
      </div>
    </div>
  )
}
