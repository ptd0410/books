import React, { useEffect } from "react";
import SideMenu from "./comps/SideMenu";
import HomeHeader from "./comps/header/HomeHeader";
import Layout from "./comps/container/Layout";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen flex bg-red">
      <SideMenu />
      <div className="w-full px-6 flex flex-col">
        <HomeHeader />
        <Outlet />
        {/* <Layout>
          <p></p>
        </Layout> */}
      </div>
    </div>
  );
};

export default Home;
