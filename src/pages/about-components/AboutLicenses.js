import React from "react";
import "./style/About.css";

import license from "./pdf-files/Ліцензія ВІК-СОФТ.pdf";
import electricityDecree from "./pdf-files/Постанова_НКРЕКП_Про_видачу_ліцензії_Електроенергія.pdf";
import gasDecree from "./pdf-files/Постанова_НКРЕКП_Про_видачу_ліцензії_Природний_газ.pdf";

const AboutLicenses = () => {
  return (
   <section className="AboutLicenses">
    <h1>
      ЛІЦЕНЗІЇ
    </h1>
    <ul>
      <li>
        <a href={license} target="_blank" rel="noreferrer">
          Ліцензія ВІК-СОФТ
        </a>
      </li>
      <li>
        <a href={electricityDecree} target="_blank" rel="noreferrer">
          Постанова НКРЕКП Про видачу ліцензії Електроенергія
        </a>
      </li>
      <li>
        <a href={gasDecree} target="_blank" rel="noreferrer">
          Постанова НКРЕКП Про видачу ліцензії Природний газ
        </a>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
   </section>
  );
}

export default AboutLicenses;