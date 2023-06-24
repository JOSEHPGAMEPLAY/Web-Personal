import { Route, Routes } from 'react-router-dom'
import Index from '../index/Index'
import Skills from '../Content/skills/Skills'
import Estudios from '../Content/estudios/Estudios'
import Contacto from '../Content/contacto/Contacto'
import About from '../Content/about/About'
import Experiencia from '../Content/experiencia/Experiencia'

export default function Rutas() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/estudios" element={<Estudios/>}/>
        <Route path="/experiencia" element={<Experiencia/>}/>
        <Route path='/contacto' element={<Contacto/>} />
    </Routes>
    </div>
  )
}
