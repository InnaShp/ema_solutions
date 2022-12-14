import React, { useRef, forwardRef } from "react";

import ElectricityDeclaration from "./homepage-components/ElectricityDeclaration";
import ForElectricityConsumers from "./homepage-components/ForElectricityConsumers";
import ListOfResolutionsElectricity from "./homepage-components/ListOfResolutionsElectricity";
import Hero from "./homepage-components/Hero";
import ElectricityInfo from "./homepage-components/ElectricityInfo";
import NaturalGasInfo from "./homepage-components/NaturalGasInfo";
import GasDeclaration from "./homepage-components/GasDeclaration";
import ForGasConsumers from "./homepage-components/ForGasConsumers";
import ListOfResolutionsGas from "./homepage-components/ListOfResolutionsGas";
import Contact from "./homepage-components/Contact";
import Companies from "./homepage-components/Companies";

const Home = forwardRef((props, ref) => {
  const contactRef = useRef(null);
  const electricityDeclarationRef = useRef(null);
  const gasDeclarationRef = useRef(null);

  return (
    <main className="Homepage" ref={ref}>
      <Hero contactRef={contactRef} />
      <ElectricityInfo electricityDeclarationRef={electricityDeclarationRef} />
      <ElectricityDeclaration ref={electricityDeclarationRef} />
      <ForElectricityConsumers />
      <ListOfResolutionsElectricity />
      <NaturalGasInfo gasDeclarationRef={gasDeclarationRef} />
      <GasDeclaration ref={gasDeclarationRef} />
      <ForGasConsumers />
      <ListOfResolutionsGas />
      <Contact ref={contactRef} />
      <Companies />
    </main>
  );
});

export default Home;