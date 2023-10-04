import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import Feedback from "../components/Feedback";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurMission />
      <OurVision />
      <Feedback />
    </>
  );
};

export default HomePage;
