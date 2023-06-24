import Header from "./components/Header/header";
import Contenido from "./components/Content/Content";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState('');

  const asignatema = (data) => {
    setTema(data);
  };

  return (
    <div className={"flex flex-col min-h-screen flex-wrap "+tema} >
      <div className="cabecera">
        <Header temaVal={asignatema}/>
      </div>
      <div className="contenido">
        <Contenido/>
      </div>
    </div>
  );
}

export default App;
