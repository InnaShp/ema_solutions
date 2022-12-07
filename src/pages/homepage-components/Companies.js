import React from "react";
import "./style/Companies.css";

import NKREKP from "./style/companies-logo/NKREKP.webp";
import OPERATOR from "./style/companies-logo/OPERATOR.webp";
import energy from "./style/companies-logo/ua energy.webp";
import ogts from "./style/companies-logo/ogts.gif";

const Companies = () => {
  return (
    <section className="Companies">
      <div className="images-group">
        <img src={NKREKP} alt="NKREKP.png" width={140} height={140} />
        <img src={OPERATOR} alt="OPERATOR.png" width={140} height={120} className="image" />
        <img src={energy} alt="ua energy.png" width={150} height={120} className="image" />
        <img src={ogts} alt="ogts.gif" width={144} height={76} className="image" />
      </div>
    </section>
  );
}

export default Companies;