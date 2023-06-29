import { InfoSkills } from "../../../data/InfoSkills";
import "./Skills.css"

export default function Skills() {

  return (
    <div className="skills entrada">
      <h1 className="tituloS">SKILLS</h1>
      <div >
        {
          InfoSkills.lenguajes.map(
            (valor)=>{
              return(
                <div key={valor}>
                  <img src={valor[0]} alt={valor[1]} className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
                  <div className="porcentaje "><div style={{ width: `${valor[2]}` }} >{valor[2]}</div></div>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}
