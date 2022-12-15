import React, { forwardRef } from "react";
import ContactForm from "./ContactForm";
import "./style/Contact.css";

const Contact = forwardRef((props, ref) => {

  return (
    <section className="Contact" ref={ref}>
      <div className="group m-0">
        <div className="group-item">
          <h4>З нами дуже легко зв'язатися</h4>
          <ul>
            <li>Заповніть форму, ми вам зателефонуємо!</li>
            <li><div className="fw-bold">Поштова адреса: </div>Україна, 04053, м.Київ, вул. Кудрявська, буд.13-19, офіс 1</li>
            <li><div className="fw-bold">Юридична адреса: </div>Україна, 04053, м.Київ, вул. Кудрявська, буд.13-19, офіс 1</li>
            <li>
              <a href="mailto:ema.office.ua@gmail.com" target="_self">ema.office.ua@gmail.com</a>
            </li>
            <li>Тел:<span className="number">+38(050)-389-33-88</span></li>
            <li className="work-hours"><div className="fw-bold">РЕЖИМ РОБОТИ:</div>Понеділок – П’ятниця: 09:00-18:00 <br /> Субота – Неділя: вихідний</li>
          </ul>
        </div>
        <div className="group-item">
          <ContactForm />
        </div>
      </div>
    </section>
  );
});

export default Contact;