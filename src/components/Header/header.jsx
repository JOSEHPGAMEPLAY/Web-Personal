import { useState } from "react";
import { enable, disable } from 'darkreader';
import { DHeader } from "../../data/InfoHeader";
import './header.css';


function  Header() {
    const [userfijo, setUserfijo] = useState('user');
    const [boton1, setBoton1] = useState('Botones');
    const [boton2, setBoton2] = useState('Botones');
    const [boton3, setBoton3] = useState('Botones');
    const [boton4, setBoton4] = useState('Botones');
    const [boton5, setBoton5] = useState('Botones');
    const [modoOscuro, setmodoOscuro] = useState(localStorage.getItem('isDarkMode')==='true');

    const light=(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    );

    const dark=(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
    );

    function changeTheme(){
        const updatedDarkmode = !modoOscuro;
        setmodoOscuro(updatedDarkmode);
        localStorage.setItem('isDarkmode', updatedDarkmode);
    }

    return (
        <header className="cabeceraC">
            <div className={userfijo} onMouseOver={()=>setUserfijo('animacionU')}onMouseLeave={()=>setUserfijo('user')}>
                <img className="IconoP" 
                src={DHeader.img} alt="icono" />
                <p className="NameP">{DHeader.nombre}</p>
            </div>
            <div className="SeccionesP" >
                <button className={boton1} onMouseEnter={()=>setBoton1('animacionB')} onMouseLeave={()=>setBoton1('Botones')}>
                    {DHeader.btn1}
                </button>
                <button className={boton2} onMouseEnter={()=>setBoton2('animacionB')} onMouseLeave={()=>setBoton2('Botones')}>
                    {DHeader.btn2}
                </button>
                <button className={boton3} onMouseEnter={()=>setBoton3('animacionB')} onMouseLeave={()=>setBoton3('Botones')}>
                    {DHeader.btn3}
                </button>
                <button className={boton4} onMouseEnter={()=>setBoton4('animacionB')} onMouseLeave={()=>setBoton4('Botones')}>
                    {DHeader.btn4}
                </button>
                <button className={boton5} onMouseEnter={()=>setBoton5('animacionB')} onMouseLeave={()=>setBoton5('Botones')}>
                    {DHeader.btn5}
                </button>
            </div>
            <div className="TemaS">
                <button 
                    className="barraT"
                    onClick={changeTheme}>
                    <div className={modoOscuro?enable()+" light":disable()+" dark"}>
                        {modoOscuro ? dark : light}
                    </div>
                </button>
            </div>
        </header>
    );
}

export default Header;

