import { useState } from "react";
import { DHeader } from "../../data/InfoHeader";
import { useLocation, Link } from 'react-router-dom';
import './header.css';


// eslint-disable-next-line react/prop-types
function  Header({ temaVal }) {

    const [userfijo, setUserfijo] = useState('user');
    const [modoOscuro, setmodoOscuro] = useState(false);

    const sol=(
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    );

    const luna=(
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
    );

    const location = useLocation();

    function changeTheme(){
        if(modoOscuro){
            setmodoOscuro(false);
            temaVal('');
        }else{
            setmodoOscuro(true);
            temaVal('dark');
        }
    }

    return (
        <div className="sticky">
        <header className={"cabeceraC"}>
            <Link to="/">
                <div className={userfijo} onMouseOver={()=>setUserfijo('animacionU')}onMouseLeave={()=>setUserfijo('user')} >
                    <img className="IconoP" 
                    src={DHeader.img} alt="icono" />
                    <p className="NameP">{DHeader.nombre}</p>
                </div>
            </Link>
            <nav className="SeccionesP" >
                <Link to="/about">
                    <button className={location.pathname =="/about" ? "Botones animacionB":"Botones"}>
                        {DHeader.btn1}
                    </button>
                </Link>
                <Link to="/skills">
                    <button className={location.pathname =="/skills" ? "Botones animacionB":"Botones"}>
                        {DHeader.btn2}
                    </button>
                </Link>
                <Link to="/estudios">
                    <button className={location.pathname =="/estudios" ? "Botones animacionB":"Botones"}>
                        {DHeader.btn3}
                    </button>
                </Link>
                <Link to="/experiencia">
                    <button className={location.pathname =="/experiencia" ? "Botones animacionB":"Botones"}>
                        {DHeader.btn4}
                    </button>
                </Link>
                <Link to="/contacto">
                    <button className={location.pathname =="/contacto" ? "Botones animacionB":"Botones"}>
                        {DHeader.btn5}
                    </button>
                </Link>
            </nav>
            <div className="TemaS">
                <button 
                    className="barraT"
                    onClick={changeTheme}>
                    <div className={modoOscuro?"luna":"sol"}>
                        {modoOscuro ? luna : sol}
                    </div>
                </button>
            </div>
        </header>
        </div>
    );
}

export default Header;

