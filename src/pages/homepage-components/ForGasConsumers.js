import React from "react";
import "./style/ForConsumers.css";

const ForGasConsumers = () => {
  return(
    <section className="ForConsumers">
      <div>
        <h2>Для споживачів природного газу</h2>
        <small>Як стати нашим клієнтом</small>
      </div>
      <ul className="pb-5">
        <li className="group">
          <div className="name">
            Перший крок
          </div>
          <p>Залиште заявку на нашому сайті та менеджер компанії зв'яжеться з Вами для отримання інформації.</p>
        </li>
        <li className="group">
          <div className="name">
            Другий крок
          </div>
          <p>Направляємо Вам індивідуальну комерційну пропозицію з урахуванням Ваших обсягів споживання природного газу.</p>
        </li>
        <li className="group">
          <div className="name">
            Третій крок
          </div>
          <p>Після того, як ми з Вами обговоримо умови, зазначені в комерційній пропозиції, укладаємо договір на постачання природного газу.</p>
        </li>
        <li className="group">
          <div className="name">
            Четвертий крок
          </div>
          <p>Вітаємо! Ви стали нашим клієнтом та користуєтесь усіма перевагами бездоганного сервісу.</p>
        </li>
      </ul>
    </section>
  );
}

export default ForGasConsumers;