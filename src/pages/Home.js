import React from "react";
import "./homepage-components/style/Home.css";

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