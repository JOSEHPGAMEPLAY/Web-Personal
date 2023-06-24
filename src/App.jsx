import Header from "./components/Header/header";
import Contenido from "./components/Content/Content";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState('');

  const asignatema = (data) => {
    setTema(data);
  };

  return (
    <div className={"app "+tema} >
        <Header temaVal={asignatema}/>
      <Contenido className="p-0 m-0"/>
    </div>
  );
}

export default App;
