import React from "react";
import "./style/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="content mt-2">
        <div className="work-hours me-5">
        <strong>РЕЖИМ РОБОТИ:</strong> 
        <br />
        Понеділок – П’ятниця: 09:00-18:00
        <br />
        Субота – Неділя: вихідний
        </div>
        <div className="phone-number me-5">
          <a href="/" >Тел:<span className="number"> +38(050)-389-33-88</span></a>
        </div>
        <div className="address">
          Адреса: Україна, 04053, м.Київ, вул. Кудрявська, буд.13-19, офіс 1
        </div>
      </div>
    </footer>
  );
}

export default Footer;