import React from "react";
import "./style/GeneralInfo.css";


const GeneralInfo = ({ dataRef }) => {
  const onClick = () => {
    dataRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="GeneralInfo">
      <h1>Інформація для споживачів</h1>
      <p>Тут ви зможете знайти загальну інформацію для споживачів</p>
      <button onClick={onClick}>Докладніше</button>
    </section>
  );
}

export default GeneralInfo;