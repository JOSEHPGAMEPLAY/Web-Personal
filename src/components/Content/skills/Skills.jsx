import { InfoSkills } from "../../../data/InfoSkills";
import "./Skills.css"

export default function Skills() {
  return (
    <div className="skills">
      <h1 className="titulo">SKILLS</h1>
      <div className="imagenes">
        <div className="imagen">
          <img src={InfoSkills.html} alt="HTML" />
          <div className="porcentaje "><div className={"text-center text-white w-["+InfoSkills.htmlp+"]"}>{InfoSkills.htmlp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.css} alt="CSS" />
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.cssp+"]"}>{InfoSkills.cssp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.js} alt="JS" />
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.jsp+"]"}>{InfoSkills.jsp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.angular} alt="ANGULAR" />
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.angularp+"]"}>{InfoSkills.angularp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.react} alt="REACT" />
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.reactp+"]"}>{InfoSkills.reactp}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.java} alt="JAVA" />
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.javap+"]"}>{InfoSkills.javap}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.postgre} alt="POSTGRE" />
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.postgrep+"]"}>{InfoSkills.postgrep}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.firebase} alt="FIREBASE" />
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.firebasep+"]"}>{InfoSkills.firebasep}</div></div>
        </div>
        <div className="imagen">
          <img src={InfoSkills.mongo} alt="MOGODB" />
          <div className="porcentaje"><div className={"text-center text-white w-["+InfoSkills.mongop+"]"}>{InfoSkills.mongop}</div></div>
        </div>
      </div>
    </div>
  )
}
