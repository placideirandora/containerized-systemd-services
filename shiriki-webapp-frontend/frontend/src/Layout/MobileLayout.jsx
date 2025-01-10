import React from "react";
import Header from "../Components/Header";
import BottomNavBar from "../Components/BottomNavBar";
import { Outlet } from "react-router-dom";

const MobileLayout = () => {
  return (
    <div className="flex flex-col border-yellow-400 bg-white" style={{ height: "100%" }}>
      <div>  
        <Header />
      </div>

      <div className="grow">{<Outlet />}</div>
      <div className="">
        <BottomNavBar />
      </div>
    </div>
  );
};

export default MobileLayout;
