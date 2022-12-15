import React from "react";
import "./style/Hero.css";

const Hero = () => {

  return (
    <section className="Hero" id="hero">
      <div>
        <h1>Енергія <br /> майбутнього</h1>
        <p>ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ "ЕМА СОЛЮШЕНЗ" - твій постачальник електроенергії</p>
      </div>
      <a href="#contact">Замовити дзвінок</a>
    </section>
  );
}

export default Hero;