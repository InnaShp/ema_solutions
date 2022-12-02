import React from "react";

import ElectricityDeclaration from "./pages/homepage-components/ElectricityDeclaration";
import ForElectricityConsumers from "./pages/homepage-components/ForElectricityConsumers";
import ListOfResolutions from "./pages/homepage-components/ListOfResolutions";
import Hero from "./pages/homepage-components/Hero";
import ElectricityInfo from "./pages/homepage-components/ElectricityInfo";
import NaturalGasInfo from "./pages/homepage-components/NaturalGasInfo";
import GasDeclaration from "./pages/homepage-components/GasDeclaration";
import ForGasConsumers from "./pages/homepage-components/ForGasConsumers";

const Home = () => {
  return (
    <main className="Homepage">
      <Hero />
      <ElectricityInfo />
      <ElectricityDeclaration />
      <ForElectricityConsumers />
      <ListOfResolutions />
      <NaturalGasInfo />
      <GasDeclaration />
      <ForGasConsumers />
    </main>
  );
}

export default Home;