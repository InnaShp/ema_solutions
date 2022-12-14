import React from "react";
import "./style/ForConsumers.css";

const ForElectricityConsumers = () => {
  return(
    <section className="ForConsumers">
      <h2>Для споживачів електроенергії</h2>
      <ul>
        <li className="group" >
          <div className="name">
            Публічний договір
          </div>
          <p>Укладення Договору про постачання електричної енергії споживачу відбувається шляхом приєднанням до публічного Договору.</p>
        </li>
        <li className="group">
          <div className="name">
            Заява-приєднання
          </div>
          <p>Для приєднання до публічного Договору про постачання електричної енергії споживачу на умовах однієї з публічних комерційних пропозицій, потрібно завантажити, заповнити, підписати та відправити на E-mail Заяву-приєднання до публічного Договору, перелік ЕІС-кодів точок комерційного обліку та заявлені обсяги споживання електричної енергії до кінця терміну дії Договору.</p>
        </li>
        <li className="group">
          <div className="name">
            Фікс на місяць. Передплата
          </div>
          <p>Споживач здійснює попередню оплату 100% вартості заявлених (прогнозованих) обсягів споживання електричної енергії не пізніше, ніж за 7 днів до початку розрахункового періоду.</p>
        </li>
        <li className="group">
          <div className="name">
            Фікс на місяць. Післяплата
          </div>
          <p>Споживач здійснює оплату за фактично спожиту електричну енергію за кожний попередній місяць протягом 5 робочих днів від дня отримання рахунку/платіжного документу.</p>
        </li>
        <li className="group">
          <div className="name pe-5">
            Порядок надання повідомлень про загрозу електробезпеці
          </div>
          <p>Інструкція про порядок надання повідомлень про загрозу електробезпеці та їх розгляду тов «Енерджи Шоп».</p>
        </li>
        <li className="group">
          <div className="name disputes">
            Порядок вирішення спорів
          </div>
          <p>Всі спори і розбіжності, які можуть виникнути щодо тлумачення і застосування Договору будуть вирішуватись Сторонами шляхом проведення переговорів і консультацій.</p>
        </li>
      </ul>
    </section>
  );
}

export default ForElectricityConsumers;