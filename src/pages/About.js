import React from "react";
import "./about-components/style/About.css";

import AboutHero from "./about-components/AboutHero";
import AboutInfo from "./about-components/AboutInfo";
import AboutLicenses from "./about-components/AboutLicenses";

const About = ({ feedbackRef }) => {
  const onClick = () => {
    feedbackRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <div>
        <AboutInfo />
        <AboutHero />
        <AboutLicenses />
        <section className="Feedback">
          <h2>Зворотній зв'язок</h2>
          <button onClick={onClick}>Контакти</button>
        </section>
      </div>
    </main>
  );
  
}
export default About;