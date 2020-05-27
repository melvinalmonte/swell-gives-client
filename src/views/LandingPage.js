import React from "react";
import { Hero, HeroInfo } from "../components/hero";
import Header from "../components/header/Header";
import CampaignContainer from "../containers/CampaignContainer";

const LandingPage = () => {
  return (
    <div className="container">
      <Hero>
        <Header />
        <HeroInfo />
        <CampaignContainer />
      </Hero>
    </div>
  );
};

export default LandingPage;
