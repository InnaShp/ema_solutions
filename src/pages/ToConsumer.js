import React, { useRef } from "react";
import "./consumer-components/style/ToConsumer.css";

import GeneralInfo from "./consumer-components/GeneralInfo";
import ElectricityData from "./consumer-components/ElectricityData";
import GasData from "./consumer-components/GasData";

const ToConsumer = () => {
  const dataRef = useRef(null);
  return (
    <main className="ToConsumer">
      <div>
        <GeneralInfo dataRef={dataRef} />
        <ElectricityData ref={dataRef} />
        <GasData />
      </div>
      
    </main>
  );
}

export default ToConsumer;