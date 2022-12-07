import React from "react";
import "./style/Companies.css";

import NKREKP from "./style/companies-logo/NKREKP.webp";
import OPERATOR from "./style/companies-logo/OPERATOR.webp";
import energy from "./style/companies-logo/ua energy.webp";
import ogts from "./style/companies-logo/ogts.gif";

const Companies = () => {
  return (
    <section className="Companies">
      <div className="row">
        <div className="col">
          <img src={NKREKP} alt="NKREKP.png" />
        </div>
        <div className="col">
          <img src={OPERATOR} alt="OPERATOR.png" />
        </div>
        <div className="col">
          <img src={energy} alt="ua energy.png" />
        </div>
        <div className="col">
          <img src={ogts} alt="ogts.gif" />
        </div>
      </div>
    </section>
  );
}

export default Companies;