import React from "react";
import "./style/ForConsumers.css";

const ForElectricityConsumers = () => {
  return(
    <section className="ForConsumers">
      <h2>Для споживачів електроенергії</h2>
      <ul>
        <li className="row">
          <div className="col-3 name">
            Публічний договір
          </div>
          <p className="col-9 ">Укладення Договору про постачання електричної енергії споживачу відбувається шляхом приєднанням до публічного Договору.</p>
        </li>
        <li className="row">
          <div className="col-3 name">
            Заява-приєднання
          </div>
          <p className="col-9">Для приєднання до публічного Договору про постачання електричної енергії споживачу на умовах однієї з публічних комерційних пропозицій, потрібно завантажити, заповнити, підписати та відправити на E-mail Заяву-приєднання до публічного Договору, перелік ЕІС-кодів точок комерційного обліку та заявлені обсяги споживання електричної енергії до кінця терміну дії Договору.</p>
        </li>
        <li className="row">
          <div className="col-3 name">
            Фікс на місяць. Передплата
          </div>
          <p className="col-9">Споживач здійснює попередню оплату 100% вартості заявлених (прогнозованих) обсягів споживання електричної енергії не пізніше, ніж за 7 днів до початку розрахункового періоду.</p>
        </li>
        <li className="row">
          <div className="col-3 name">
            Фікс на місяць. Післяплата
          </div>
          <p className="col-9">Споживач здійснює оплату за фактично спожиту електричну енергію за кожний попередній місяць протягом 5 робочих днів від дня отримання рахунку/платіжного документу.</p>
        </li>
        <li className="row">
          <div className="col-3 name pe-5">
            Порядок надання повідомлень про загрозу електробезпеці
          </div>
          <p className="col-9">Інструкція про порядок надання повідомлень про загрозу електробезпеці та їх розгляду тов «Енерджи Шоп».</p>
        </li>
        <li className="row">
          <div className="col-3 name disputes">
            Порядок вирішення спорів
          </div>
          <p className="col-9">Всі спори і розбіжності, які можуть виникнути щодо тлумачення і застосування Договору будуть вирішуватись Сторонами шляхом проведення переговорів і консультацій.</p>
        </li>
      </ul>
    </section>
  );
}

export default ForElectricityConsumers;