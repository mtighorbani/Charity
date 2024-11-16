import React from "react";
import HomePageNavbar from "./HomePageNavbar";
import OurMissionBox from "./OurMissionBox";
import Navbar from "./navbar/Navbar";
import CharityCards from "./CharityCards";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageNavbar />
      <OurMissionBox />
      <CharityCards />
    </>
  );
};

export default HomePage;
