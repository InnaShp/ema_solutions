import React from "react";
import "./consumer-components/style/ToConsumer.css";

import GeneralInfo from "./consumer-components/GeneralInfo";
import ElectricityData from "./consumer-components/ElectricityData";
import GasData from "./consumer-components/GasData";

const ToConsumer = () => {
  return (
    <main className="ToConsumer">
      <GeneralInfo />
      <ElectricityData />
      <GasData />
    </main>
  );
}

export default ToConsumer;