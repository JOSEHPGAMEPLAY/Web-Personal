import Header from "./components/Header/header";
import Contenido from "./components/Content/Content";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [tema, setTema] = useState('');

  const asignatema = (data) => {
    setTema(data);
  };

  return (
    <div className={"app "+tema} >
      <div className="sticky top-0 min-w-full z-50 min-h-[36px] max-h-[210px]">
        <Header temaVal={asignatema} className="cabecera"/>
      </div>
      <Contenido className="contenido"/>
      <Footer/>
    </div>
  );
}

export default App;
