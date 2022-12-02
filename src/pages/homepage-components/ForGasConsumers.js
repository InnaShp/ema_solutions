import React from "react";
import "./style/ForConsumers.css";

const ForGasConsumers = () => {
  return(
    <section className="ForConsumers">
      <h2>Для споживачів природного газу</h2>
      <small>Як стати нашим клієнтом</small>
      <ul className="pb-5">
        <li className="row">
          <div className="col-3 name">
            Перший крок
          </div>
          <p className="col-9 ">Залиште заявку на нашому сайті та менеджер компанії зв'яжеться з Вами для отримання інформації.</p>
        </li>
        <li className="row">
          <div className="col-3 name">
            Другий крок
          </div>
          <p className="col-9">Направляємо Вам індивідуальну комерційну пропозицію з урахуванням Ваших обсягів споживання природного газу.</p>
        </li>
        <li className="row">
          <div className="col-3 name">
            Третій крок
          </div>
          <p className="col-9">Після того, як ми з Вами обговоримо умови, зазначені в комерційній пропозиції, укладаємо договір на постачання природного газу.</p>
        </li>
        <li className="row">
          <div className="col-3 name">
            Четвертий крок
          </div>
          <p className="col-9">Вітаємо! Ви стали нашим клієнтом та користуєтесь усіма перевагами бездоганного сервісу.</p>
        </li>
      </ul>
    </section>
  );
}

export default ForGasConsumers;