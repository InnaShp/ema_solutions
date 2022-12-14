import React from "react";
import "./style/Hero.css";

const Hero = ({ contactRef }) => {
  const onClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="Hero">
      <div>
        <h1>Енергія <br /> майбутнього</h1>
        <p>ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ "ЕМА СОЛЮШЕНЗ" - твій постачальник електроенергії</p>
      </div>
      <button onClick={onClick}>Замовити дзвінок</button>
    </section>
  );
}

export default Hero;