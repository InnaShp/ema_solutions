import React from "react";
import "./about-components/style/About.css";
import { Link } from "react-router-dom";

import AboutHero from "./about-components/AboutHero";
import AboutInfo from "./about-components/AboutInfo";
import AboutLicenses from "./about-components/AboutLicenses";

const About = () => {
  
  return (
    <main id="about">
      <div>
        <AboutInfo />
        <AboutHero />
        <AboutLicenses />
        <section className="Feedback" id="feedback">
          <h2>Зворотній зв'язок</h2>
          <Link to="/home#home">Контакти</Link>
        </section>
      </div>
    </main>
  );
  
}
export default About;