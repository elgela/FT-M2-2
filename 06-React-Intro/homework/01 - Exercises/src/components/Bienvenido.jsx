import React from "react";
import Botones from "./Botones";

const studentName = "Marcelo";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  
  return(<div>
      <h1>Página web propiedad de:</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map(techSkills => <li>{techSkills}</li>)}
      </ul>
      <Botones alerts={alerts}/>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
