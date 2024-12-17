import React from "react";

//app
import HomePageNavbar from "./HomePageNavbar";
import OurMissionBox from "./OurMissionBox";
import Navbar from "./navbar/Navbar";
import CharityCards from "./CharityCards";
import LoginModal from "../common/LoginModal";
import Footer from "../footer/Footer";
import BaseCollapse from "../common/base/BaseCollapse";

const HomePage = () => {
  interface BaseCollapseProps {
    items: {
      title: string;
      description: string;
    }[];
  }
  const collapseItems: BaseCollapseProps = {
    items: [
      { title: "بزن روش", description: "چیزی نبود" },
      { title: "2بزن روش", description: "2چیزی نبود" },
      { title: "3بزن روش", description: "3چیزی نبود" },
    ],
  };

  return (
    <>
      <Navbar />
      <HomePageNavbar />
      <OurMissionBox />
      <CharityCards />
      <div className="mx-12 max-lg:mx-3 max-sm:m-1">
        <BaseCollapse items={collapseItems.items} />
      </div>
      <Footer />
      <LoginModal />
    </>
  );
};

HomePage.layoutProps = { desktopContainer: "full" };

export default HomePage;
