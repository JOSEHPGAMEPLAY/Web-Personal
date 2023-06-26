import { InfoAbout } from '../../../data/InfoAbout';
import './About.css';

function About() {
  return (
    <div className="about entrada">
      <div className="imgAboutC">
        <img src={InfoAbout.Img} className="imgAbout" alt="" />
      </div>
      <div className="contenidoAbout">
        <h1 className='titulo'>
          ACERCA DE MI
        </h1>
        <p className='texto'>
          <b>Nombre: </b>
          {InfoAbout.Nombre}
        </p>
        <p className='texto'>
          <b>Origen: </b>
          {InfoAbout.Origen}
        </p>
        <p className='texto'>
          <b>Correo: </b>
          {InfoAbout.Correo}
        </p>
        <p className='texto'>
          <b>Descripcion: </b>
          {InfoAbout.Descripcion2}
          <br />
          {InfoAbout.Descripcion1}
          <br/>
          {InfoAbout.Descripcion3}
        </p>
      </div>     
    </div>
  )
}
export default About;
