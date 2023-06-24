import { Route, Routes,  } from 'react-router-dom'
import Index from '../index/Index'
import Skills from '../Content/skills/Skills'
import Estudios from '../Content/estudios/Estudios'
import Contacto from '../Content/contacto/Contacto'
import About from '../Content/about/About'
import Experiencia from '../Content/experiencia/Experiencia'

export default function Rutas() {
  return (
        <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/skills" element={<Skills/>} />
            <Route exact path="/estudios" element={<Estudios/>}/>
            <Route exact path="/experiencia" element={<Experiencia/>}/>
            <Route exact path='/contacto' element={<Contacto/>} />
        </Routes>
  )
}
