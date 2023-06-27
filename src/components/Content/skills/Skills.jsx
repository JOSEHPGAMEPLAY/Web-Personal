import { InfoSkills } from "../../../data/InfoSkills";
import "./Skills.css"

export default function Skills() {

  return (
    <div className="skills entrada">
      <h1 className="titulo">SKILLS</h1>
      <div className="imagenes">
        <div className="imagen">
          <img src={InfoSkills.html} alt="HTML" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje "><div className={"text-center text-white w-["+InfoSkills.htmlp+"]"}>{InfoSkills.htmlp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.css} alt="CSS" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.cssp+"]"}>{InfoSkills.cssp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.js} alt="JS" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.jsp+"]"}>{InfoSkills.jsp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.angular} alt="ANGULAR" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.angularp+"]"}>{InfoSkills.angularp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.react} alt="REACT" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.reactp+"]"}>{InfoSkills.reactp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.java} alt="JAVA" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.javap+"]"}>{InfoSkills.javap}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.postgre} alt="POSTGRE" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.postgrep+"]"}>{InfoSkills.postgrep}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.firebase} alt="FIREBASE" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.firebasep+"]"}>{InfoSkills.firebasep}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.mongo} alt="MOGODB" className="drop-shadow-[0px_0px_7px_rgba(255,255,255,1)] dark:drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"/>
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.mongop+"]"}>{InfoSkills.mongop}</div></div>
        </div>
      </div>
    </div>
  )
}
