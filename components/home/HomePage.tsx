"use client";
import React from "react";
import HomePageNavbar from "./HomePageNavbar";
import OurMissionBox from "./OurMissionBox";
import Navbar from "./navbar/Navbar";
import CharityCards from "./CharityCards";
import LoginModal from "../common/LoginModal";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageNavbar />
      <OurMissionBox />
      <CharityCards />
      <LoginModal />
    </>
  );
};

export default HomePage;
