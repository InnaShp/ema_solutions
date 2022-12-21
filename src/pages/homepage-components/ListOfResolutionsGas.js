import React from "react";
import "./style/ListOfResolutions.css";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ListOfResolutionsGas = () => {
  return(
    <section className="ListOfResolutions Gas">
      <h2>ОФІЦІЙНІ ДОКУМЕНТИ ГАЗ</h2>
      <AnimationOnScroll animateIn="animate__fadeInLeft" className="animate__slow	0.5s list-container">
        <ul>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/329-19#Text" target="_blank" rel="noreferrer noopener">
              Закон України № 329-VIII : Про ринок природного газу
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/1540-19#Text" target="_blank" rel="noreferrer noopener">
              Закон України № 1540-VIII : Про Національну комісію, що здійснює державне регулювання у сферах енергетики та комунальних послуг
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/922-19#Text" target="_blank" rel="noreferrer noopener">
              Закон України № 922-VIII : Про публічні закупівлі
            </a>
          </li>
          <li>
            <a href="https://www.nerc.gov.ua/sferi-diyalnosti/prirodnij-gaz/pobutovi-spozhivachi/ukladennya-dogovoriv-pobutovimi-spozhivachami/ukladannya-dogovoru-z-postachannya-prirodnogo-gazu" target="_blank" rel="noreferrer noopener">
              Порядок НКРЕКП : Порядок укладання договору постачання природного газу
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/v0201874-17#Text" target="_blank" rel="noreferrer noopener">
              ПОСТАНОВА НКРЕКП № 201 від 16.02.2017 (v0201874-17)
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/z1378-15#Text" target="_blank" rel="noreferrer noopener">
              ПОСТАНОВА НКРЕКП № 2493 від 30.09.2015 (z1378-15)
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/z1379-15#Text" target="_blank" rel="noreferrer noopener">
              ПОСТАНОВА НКРЕКП № 2494 від 30.09.2015 (z1379-15)
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/z1382-15#Text" target="_blank" rel="noreferrer noopener">
              ПОСТАНОВА НКРЕКП № 2496 від 30.09.2015 (z1382-15)
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/v1156874-17#Text" target="_blank" rel="noreferrer noopener">
              Про затвердження Мінімальних стандартів та вимог до якості обслуговування cпоживачів та постачання природного газ
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/show/v0312874-18#Text" target="_blank" rel="noreferrer noopener">
              Закон України "Про звернення громадян"
            </a>
          </li>
          <li>
            <a href="https://zakon.rada.gov.ua/laws/main/222-19#Text" target="_blank" rel="noreferrer noopener">
              Закон України "Про ліцензування видів господарської діяльності"
            </a>
          </li>
        </ul>
      </AnimationOnScroll>
    </section>
  );
}

export default ListOfResolutionsGas;