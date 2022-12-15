import React from "react";
import "./style/Declaration.css";

import publicAgreementDoc from "./electricity_agreement_files/ЕМА_СОЛЮШЕНЗ_Договір публічний.docx";
import publicAgreementPdf from "./electricity_agreement_files/pdf/ЕМА_СОЛЮШЕНЗ_Договір публічний.pdf";

import joiningApplicationDoc from "./electricity_agreement_files/ЕМА_СОЛЮШЕНЗ_Додаток_1_до_договору_заява_приєднання_з_додатками.docx";
import joiningApplicationPdf from "./electricity_agreement_files/pdf/ЕМА_СОЛЮШЕНЗ_Додаток_1_до_договору_заява_приєднання_з_додатками.pdf";

import prePaymentDoc from "./electricity_agreement_files/ЕМА_СОЛЮШЕНЗ_Фіксована_на_місяця_попередня_оплата_КП_№1.docx";
import prePaymentPdf from "./electricity_agreement_files/pdf/ЕМА_СОЛЮШЕНЗ_Фіксована_на_місяця_попередня_оплата_КП_№1.pdf";

import postpaidDoc from "./electricity_agreement_files/ЕМА_СОЛЮШЕНЗ_Фіксована_на_місяць_післяплата_КП_№2.docx";
import postpaidPdf from "./electricity_agreement_files/pdf/ЕМА_СОЛЮШЕНЗ_Фіксована_на_місяць_післяплата_КП_№2.pdf";

import threatDoc from "./electricity_agreement_files/ЕМА_СОЛЮШЕНЗ_ПРО_ЗАГРОЗУ_ЕЛЕКТРОБЕЗПЕЦІ_ТА_ЇХ_РОЗГЛЯД.docx";
import threatPdf from "./electricity_agreement_files/pdf/ЕМА_СОЛЮШЕНЗ_ПРО_ЗАГРОЗУ_ЕЛЕКТРОБЕЗПЕЦІ_ТА_ЇХ_РОЗГЛЯД.pdf";

import disputesDoc from "./electricity_agreement_files/ЕМА_СОЛЮШЕНЗ_Порядок вирішення спорів ее.docx";
import disputesPdf from "./electricity_agreement_files/pdf/ЕМА_СОЛЮШЕНЗ_Порядок вирішення спорів ее.pdf";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ElectricityDeclaration = () => {
  return (
    <section className="Declaration" id="electricity-declaration">
      <h3>
        Для укладання договору ознайомтесь, оберіть свою <br /> комерційну пропозицію та заповніть заяву-приєднання
      </h3>
      <AnimationOnScroll animateIn="animate__fadeIn" className="animate__slow	0.5s">
        <div className="group mt-3">
          <div className="group-item">
            <div className="contents">
              <a href={publicAgreementPdf} target="_blank" className="pdf-link" rel="noreferrer">Публічний договір</a>
              <p>Ознайомся. Саме за цим договором <br /> ми будемо співпрацювати</p>
              <a href={publicAgreementDoc} download="ЕМА_СОЛЮШЕНЗ_Договір публічний.docx" target="_blank" className="download-button" rel="noreferrer">
                <button className="button-correction" >
                  <svg data-bbox="37 20 126 160" viewBox="0 0 200 200" className="icon" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                    <g>
                        <path d="M95.952 137.751a3.37 3.37 0 0 0 2.608.896c.088.008.138.001.265.013h.034a3.39 3.39 0 0 0 2.317-.916l45.157-41.941a3.445 3.445 0 0 0 .192-4.846 3.393 3.393 0 0 0-4.816-.193L102.266 127.4V23.429c0-1.894-1.525-3.429-3.408-3.429s-3.408 1.535-3.408 3.429v104.523L55.412 90.766a3.393 3.393 0 0 0-4.816.193 3.445 3.445 0 0 0 .192 4.846l45.164 41.946z"></path>
                        <path d="M159.592 173.142H40.408c-1.882 0-3.408 1.535-3.408 3.429S38.525 180 40.408 180h119.184c1.883 0 3.408-1.535 3.408-3.429s-1.525-3.429-3.408-3.429z"></path>
                    </g>
                  </svg>
                </button>
              </a>
            </div>
            <div className="contents">
                <a href={postpaidPdf} target="_blank" className="pdf-link" rel="noreferrer">Фікс на місяць. Післяплата</a>
                <p>Ознайомся та обери</p>
                <a href={postpaidDoc} download="ЕМА_СОЛЮШЕНЗ_Фіксована_на_місяць_післяплата_КП_№2.docx" className="download-button" target="_blank" rel="noreferrer">
                  <button >
                    <svg data-bbox="37 20 126 160" viewBox="0 0 200 200" className="icon" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                      <g>
                          <path d="M95.952 137.751a3.37 3.37 0 0 0 2.608.896c.088.008.138.001.265.013h.034a3.39 3.39 0 0 0 2.317-.916l45.157-41.941a3.445 3.445 0 0 0 .192-4.846 3.393 3.393 0 0 0-4.816-.193L102.266 127.4V23.429c0-1.894-1.525-3.429-3.408-3.429s-3.408 1.535-3.408 3.429v104.523L55.412 90.766a3.393 3.393 0 0 0-4.816.193 3.445 3.445 0 0 0 .192 4.846l45.164 41.946z"></path>
                          <path d="M159.592 173.142H40.408c-1.882 0-3.408 1.535-3.408 3.429S38.525 180 40.408 180h119.184c1.883 0 3.408-1.535 3.408-3.429s-1.525-3.429-3.408-3.429z"></path>
                      </g>
                    </svg>
                  </button>
                </a>
            </div>
          </div>
          <div className="group-item">
            <div className="contents">
                <a href={joiningApplicationPdf} target="_blank" className="pdf-link" rel="noreferrer">Заява-приєднання</a>
                <p>Скачай. Заповни. Надійшли</p>
                <a href={joiningApplicationDoc} download="ЕМА_СОЛЮШЕНЗ_Додаток_1_до_договору_заява_приєднання_з_додатками.docx" className="download-button" target="_blank" rel="noreferrer">
                  <button >
                    <svg data-bbox="37 20 126 160" viewBox="0 0 200 200" className="icon" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                      <g>
                          <path d="M95.952 137.751a3.37 3.37 0 0 0 2.608.896c.088.008.138.001.265.013h.034a3.39 3.39 0 0 0 2.317-.916l45.157-41.941a3.445 3.445 0 0 0 .192-4.846 3.393 3.393 0 0 0-4.816-.193L102.266 127.4V23.429c0-1.894-1.525-3.429-3.408-3.429s-3.408 1.535-3.408 3.429v104.523L55.412 90.766a3.393 3.393 0 0 0-4.816.193 3.445 3.445 0 0 0 .192 4.846l45.164 41.946z"></path>
                          <path d="M159.592 173.142H40.408c-1.882 0-3.408 1.535-3.408 3.429S38.525 180 40.408 180h119.184c1.883 0 3.408-1.535 3.408-3.429s-1.525-3.429-3.408-3.429z"></path>
                      </g>
                    </svg>
                  </button>
                </a>
            </div>
            <div className="contents">
              <a href={threatPdf} target="_blank" className="pdf-link" rel="noreferrer">Порядок надання повідомлень <br /> про загрозу електробезпеці</a>
              <p className="mt-0">Ознайомся</p>
              <a href={threatDoc} download="ЕМА_СОЛЮШЕНЗ_ПРО_ЗАГРОЗУ_ЕЛЕКТРОБЕЗПЕЦІ_ТА_ЇХ_РОЗГЛЯД.docx" className="download-button" target="_blank" rel="noreferrer">
                <button >
                  <svg data-bbox="37 20 126 160" viewBox="0 0 200 200" className="icon" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                    <g>
                        <path d="M95.952 137.751a3.37 3.37 0 0 0 2.608.896c.088.008.138.001.265.013h.034a3.39 3.39 0 0 0 2.317-.916l45.157-41.941a3.445 3.445 0 0 0 .192-4.846 3.393 3.393 0 0 0-4.816-.193L102.266 127.4V23.429c0-1.894-1.525-3.429-3.408-3.429s-3.408 1.535-3.408 3.429v104.523L55.412 90.766a3.393 3.393 0 0 0-4.816.193 3.445 3.445 0 0 0 .192 4.846l45.164 41.946z"></path>
                        <path d="M159.592 173.142H40.408c-1.882 0-3.408 1.535-3.408 3.429S38.525 180 40.408 180h119.184c1.883 0 3.408-1.535 3.408-3.429s-1.525-3.429-3.408-3.429z"></path>
                    </g>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="group-item">
            <div className="contents">
                <a href={prePaymentPdf} target="_blank" className="pdf-link" rel="noreferrer">Фікс на місяць. Передплата</a>
                <p>Ознайомся та обери</p>
                <a href={prePaymentDoc} download="ЕМА_СОЛЮШЕНЗ_Фіксована_на_місяця_попередня_оплата_КП_№1.docx" className="download-button" target="_blank" rel="noreferrer">
                  <button >
                    <svg data-bbox="37 20 126 160" viewBox="0 0 200 200" className="icon" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                      <g>
                          <path d="M95.952 137.751a3.37 3.37 0 0 0 2.608.896c.088.008.138.001.265.013h.034a3.39 3.39 0 0 0 2.317-.916l45.157-41.941a3.445 3.445 0 0 0 .192-4.846 3.393 3.393 0 0 0-4.816-.193L102.266 127.4V23.429c0-1.894-1.525-3.429-3.408-3.429s-3.408 1.535-3.408 3.429v104.523L55.412 90.766a3.393 3.393 0 0 0-4.816.193 3.445 3.445 0 0 0 .192 4.846l45.164 41.946z"></path>
                          <path d="M159.592 173.142H40.408c-1.882 0-3.408 1.535-3.408 3.429S38.525 180 40.408 180h119.184c1.883 0 3.408-1.535 3.408-3.429s-1.525-3.429-3.408-3.429z"></path>
                      </g>
                    </svg>
                  </button>
                </a>
            </div>
            <div className="contents">
              <a href={disputesPdf} target="_blank" className="pdf-link" rel="noreferrer">Порядок вирішення спорів</a>
              <p>Ознайомся</p>
              <a href={disputesDoc} download="ЕМА_СОЛЮШЕНЗ_Порядок вирішення спорів ее.docx" className="download-button" target="_blank" rel="noreferrer">
                <button >
                  <svg data-bbox="37 20 126 160" viewBox="0 0 200 200" className="icon" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                    <g>
                        <path d="M95.952 137.751a3.37 3.37 0 0 0 2.608.896c.088.008.138.001.265.013h.034a3.39 3.39 0 0 0 2.317-.916l45.157-41.941a3.445 3.445 0 0 0 .192-4.846 3.393 3.393 0 0 0-4.816-.193L102.266 127.4V23.429c0-1.894-1.525-3.429-3.408-3.429s-3.408 1.535-3.408 3.429v104.523L55.412 90.766a3.393 3.393 0 0 0-4.816.193 3.445 3.445 0 0 0 .192 4.846l45.164 41.946z"></path>
                        <path d="M159.592 173.142H40.408c-1.882 0-3.408 1.535-3.408 3.429S38.525 180 40.408 180h119.184c1.883 0 3.408-1.535 3.408-3.429s-1.525-3.429-3.408-3.429z"></path>
                    </g>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  )
}

export default ElectricityDeclaration;