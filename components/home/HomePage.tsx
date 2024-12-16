import React from "react";

//app
import HomePageNavbar from "./HomePageNavbar";
import OurMissionBox from "./OurMissionBox";
import Navbar from "./navbar/Navbar";
import CharityCards from "./CharityCards";
import LoginModal from "../common/LoginModal";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageNavbar />
      <OurMissionBox />
      <CharityCards />
      <LoginModal />
      <Footer />
    </>
  );
};

HomePage.layoutProps = { desktopContainer: "full" };

export default HomePage;
