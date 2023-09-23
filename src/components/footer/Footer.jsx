import { InfoFooter } from '../../data/InfoFooter';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='flex bg-slate-600 flex-wrap p-5'>
      <div className='flex shrink flex-wrap w-fit'>
        <img src={InfoFooter.simbolo[0]} 
        alt={InfoFooter.simbolo[1]} 
          className='w-16 drop-shadow-[0px_0px_5px_rgba(255,255,255,1)]'
        /> 
        <h1 className='
        font-Lilita text-[25px] self-center
         shrink grow text-center text-white
          drop-shadow-[0px_0px_3px_rgba(255,255,255,0.5)] pl-5
    '>{InfoFooter.simbolo[1]}</h1>
      </div>
      <p className='text-center self-center grow ptc dark:text-white'
      >Todos los derechos reservados</p>
      <div className='linksRedes max-w-fit'>
        {InfoFooter.redes.map(valor=>{
          
          const redirectToPage = () => {
            window.open(valor[2]);
          };
          return(
           <>
            <img src={valor[0]} 
            alt={valor[1]} 
            onClick={redirectToPage}
            className="IconosRedes cursor-pointer"
            />
           </> 
          )
        })}
      </div>
    </footer>
  )
}
