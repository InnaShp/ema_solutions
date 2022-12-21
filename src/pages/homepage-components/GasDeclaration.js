import React from "react";
import "./style/Declaration.css";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import supplyAgreementDoc from "./gas-agreement-files/ЕМА_СОЛЮШЕНЗ_Договір_постачання_газу_ЕМА.docx";
import supplyAgreementPdf from "./gas-agreement-files/pdf/ЕМА_СОЛЮШЕНЗ_Договір_постачання_газу_ЕМА.pdf";

import rightsOfSuplierPdf from "./gas-agreement-files/pdf/Права та обов'язки постачальника.pdf";
import supplyConditionsPdf from "./gas-agreement-files/pdf/Загальні умови постачання природного газу.pdf";
import consumerRightsPdf from "./gas-agreement-files/pdf/Правата та обов'язки споживача.pdf";

import disputeResolutionDoc from "./gas-agreement-files/ЕМА_СОЛЮШЕНЗ_Порядок вирішення спорів газdocx.docx";
import disputeResolutionPdf from "./gas-agreement-files/pdf/ЕМА_СОЛЮШЕНЗ_Порядок вирішення спорів газ.pdf";

import pricingPdf from "./gas-agreement-files/pdf/Ціна на природний газ.pdf";



const GasDeclaration = () => {
  return (
    <section className="Declaration" id="gas-declaration">
      <h3>
        Укласти договір постачання природного газу
      </h3>
      <AnimationOnScroll animateIn="animate__fadeIn" className="animate__slow	0.5s">
        <div className="group">  
          <div className="group-item">
            <div className="contents special">
                <a href={supplyAgreementPdf} target="_blank" className="pdf-link" rel="noreferrer">Договір постачання природного газу</a>
                <a href={supplyAgreementDoc} download="ЕМА_СОЛЮШЕНЗ_Договір_постачання_газу_ЕМА.docx" target="_blank" className="download-button" rel="noreferrer">
                  <button>
                    <svg data-bbox="37 20 126 160" viewBox="0 0 200 200" className="icon" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                      <g>
                          <path d="M95.952 137.751a3.37 3.37 0 0 0 2.608.896c.088.008.138.001.265.013h.034a3.39 3.39 0 0 0 2.317-.916l45.157-41.941a3.445 3.445 0 0 0 .192-4.846 3.393 3.393 0 0 0-4.816-.193L102.266 127.4V23.429c0-1.894-1.525-3.429-3.408-3.429s-3.408 1.535-3.408 3.429v104.523L55.412 90.766a3.393 3.393 0 0 0-4.816.193 3.445 3.445 0 0 0 .192 4.846l45.164 41.946z"></path>
                          <path d="M159.592 173.142H40.408c-1.882 0-3.408 1.535-3.408 3.429S38.525 180 40.408 180h119.184c1.883 0 3.408-1.535 3.408-3.429s-1.525-3.429-3.408-3.429z"></path>
                      </g>
                    </svg>
                  </button>
                </a>
            </div>
            <div className="contents special">
              <a href="https://zakon.rada.gov.ua/laws/show/z1382-15#Text" target="_blank" className="pdf-link" rel="noreferrer">Правила постачання природного газу</a>
              <a href="https://zakon.rada.gov.ua/laws/show/z1382-15#Text" className="download-button" target="_blank" rel="noreferrer">
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
            <div className="contents special">
              <a href="https://www.nerc.gov.ua/sferi-diyalnosti/prirodnij-gaz/pobutovi-spozhivachi/ukladennya-dogovoriv-pobutovimi-spozhivachami/ukladannya-dogovoru-z-postachannya-prirodnogo-gazu" target="_blank" className="pdf-link" rel="noreferrer">Порядок укладання договору постачання природного газу</a>
              <a href="https://www.nerc.gov.ua/sferi-diyalnosti/prirodnij-gaz/pobutovi-spozhivachi/ukladennya-dogovoriv-pobutovimi-spozhivachami/ukladannya-dogovoru-z-postachannya-prirodnogo-gazu" className="download-button" target="_blank" rel="noreferrer">
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
            <div className="contents special">
              <a href={rightsOfSuplierPdf} target="_blank" className="pdf-link" rel="noreferrer">Права та обов'язки постачальника природного газу</a>
              <a href={rightsOfSuplierPdf} className="download-button" target="_blank" rel="noreferrer">
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
            <div className="contents special">
              <a href={supplyConditionsPdf} target="_blank" className="pdf-link" rel="noreferrer">Загальні умови постачання природного газу</a>
              <a href={supplyConditionsPdf} className="download-button" target="_blank" rel="noreferrer">
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
            <div className="contents special">
              <a href={consumerRightsPdf} target="_blank" className="pdf-link" rel="noreferrer">Права та обов'язки споживача природного газу</a>
              <a href={consumerRightsPdf} className="download-button" target="_blank" rel="noreferrer">
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
            <div className="contents special">
              <a href={disputeResolutionPdf} target="_blank" className="pdf-link" rel="noreferrer">Порядок вирішення спорів</a>
              <a href={disputeResolutionDoc} download="ЕМА_СОЛЮШЕНЗ_Порядок вирішення спорів газdocx.docx" className="download-button" target="_blank" rel="noreferrer">
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
            <div className="contents special">
              <a href={pricingPdf} target="_blank" className="pdf-link" rel="noreferrer">Ціноутворення</a>
              <a href={pricingPdf} className="download-button" target="_blank" rel="noreferrer">
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
  );
}

export default GasDeclaration;