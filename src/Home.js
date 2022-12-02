import React from "react";

import Declaration from "./pages/homepage-components/Declaration";
import ForElectricityConsumers from "./pages/homepage-components/ForElectricityConsumers";
import ListOfResolutions from "./pages/homepage-components/ListOfResolutions";
import Hero from "./pages/homepage-components/Hero";
import ElectricityInfo from "./pages/homepage-components/ElectricityInfo";
import NaturalGasInfo from "./pages/homepage-components/NaturalGasInfo";

const Home = () => {
  return (
    <main className="Homepage">
      <Hero />
      <ElectricityInfo />
      <Declaration />
      <ForElectricityConsumers />
      <ListOfResolutions />
      <NaturalGasInfo />
    </main>
  );
}

export default Home;