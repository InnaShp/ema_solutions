import React from "react";

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

const Home = () => {
  return (
    <main className="Homepage">
      <Hero />
      <ElectricityInfo />
      <ElectricityDeclaration />
      <ForElectricityConsumers />
      <ListOfResolutionsElectricity />
      <NaturalGasInfo />
      <GasDeclaration />
      <ForGasConsumers />
      <ListOfResolutionsGas />
      <Contact />
      <Companies />
    </main>
  );
}

export default Home;