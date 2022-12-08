import React, { useRef } from "react";

import ElectricityDeclaration from "./pages/homepage-components/ElectricityDeclaration";
import ForElectricityConsumers from "./pages/homepage-components/ForElectricityConsumers";
import ListOfResolutionsElectricity from "./pages/homepage-components/ListOfResolutionsElectricity";
import Hero from "./pages/homepage-components/Hero";
import ElectricityInfo from "./pages/homepage-components/ElectricityInfo";
import NaturalGasInfo from "./pages/homepage-components/NaturalGasInfo";
import GasDeclaration from "./pages/homepage-components/GasDeclaration";
import ForGasConsumers from "./pages/homepage-components/ForGasConsumers";
import ListOfResolutionsGas from "./pages/homepage-components/ListOfResolutionsGas";
import Contact from "./pages/homepage-components/Contact";
import Companies from "./pages/homepage-components/Companies";
import Footer from "./pages/homepage-components/Footer";

const Home = () => {
  const contactRef = useRef(null);
  const electricityDeclarationRef = useRef(null);
  const gasDeclarationRef = useRef(null);

  return (
    <main className="Homepage">
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
      <Footer />
    </main>
  );
}

export default Home;