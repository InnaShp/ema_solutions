import React, { forwardRef }  from "react";
import "./style/Data.css";
import threatPdf from "../homepage-components/electricity_agreement_files/pdf/ЕМА_СОЛЮШЕНЗ_ПРО_ЗАГРОЗУ_ЕЛЕКТРОБЕЗПЕЦІ_ТА_ЇХ_РОЗГЛЯД.pdf";
import disputesPdf from "../homepage-components/electricity_agreement_files/pdf/ЕМА_СОЛЮШЕНЗ_Порядок вирішення спорів ее.pdf";

const ElectricityData = forwardRef((props, ref) => {
  return (
    <section className="Data" ref={ref}>
      <h2>
        Для споживачів електроенергії
      </h2>
      <ul>
        <li>
          <a href="https://zakon.rada.gov.ua/laws/show/2019-19#Text" target="_blank" rel="noreferrer noopener">
            Закон «Про ринок електричної енергії»
          </a>
        </li>
        <li>
          <a href="https://zakon.rada.gov.ua/laws/show/222-19#Text" target="_blank" rel="noreferrer noopener">
            Закон України «Про ліцензування видів господарської діяльності»
          </a>
        </li>
        <li>
          <a href="https://www.nerc.gov.ua/acts/pro-zatverdzhennya-pravil-rinku?id=31857" target="_blank" rel="noreferrer noopener">
            ПОСТАНОВА НКРЕКП №307 від 14.03.2018р.
          </a>
        </li>
        <li>
          <a href="https://zakon.rada.gov.ua/laws/show/v0308874-17#Text" target="_blank" rel="noreferrer noopener">
            ПОСТАНОВА НКРЕКП № 308 від 22.03.2017р.
          </a>
        </li>
        <li>
          <a href="https://www.nerc.gov.ua/acts/pro-zatverdzhennya-kodeksu-sistemi-peredachi?id=31909" target="_blank" rel="noreferrer noopener">
            ПОСТАНОВА НКРЕКП № 309 від 14.03.2018р.
          </a>
        </li>
        <li>
          <a href="https://zakon.rada.gov.ua/laws/show/v0310874-18#Text" target="_blank" rel="noreferrer noopener">
            ПОСТАНОВА НКРЕКП №310 від 14.03.2018р.
          </a>
        </li>
        <li>
          <a href="https://zakon.rada.gov.ua/laws/show/v0311874-18#Text" target="_blank" rel="noreferrer noopener">
            ПОСТАНОВА НКРЕКП №311 від 14.03.2018р.
          </a>
        </li>
        <li>
          <a href="https://zakon.rada.gov.ua/laws/show/v0312874-18#Text" target="_blank" rel="noreferrer noopener">
            ПОСТАНОВА НКРЕКП № 312 від 14.03.2018р.
          </a>
        </li>
        <li>
          <a href="https://zakon.rada.gov.ua/laws/show/v1469874-17#Text" target="_blank" rel="noreferrer noopener">
            ПОСТАНОВА НКРЕКП №1469 від 27.12.2017р.
          </a>
        </li>
        <li>
          <a href={threatPdf} target="_blank" rel="noreferrer noopener">
            Порядок надання повідомлень про загрозу електробезпеці
          </a>
        </li>
        <li>
          <a href={disputesPdf} target="_blank" rel="noreferrer noopener">
            Порядок вирішення спорів 
          </a>
        </li>
      </ul>
    </section>
  );
});

export default ElectricityData;