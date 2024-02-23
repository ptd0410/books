import { Outlet } from "react-router-dom";
import HomeFooter from "./footer";
import HomeHeader from "./header";

import useQuery from "@@hooks/useQuery";
import MainLayout from "@@layouts/MainLayout";

const Home = () => {
  const { params } = useQuery();
  console.log("par", params);

  return (
    <>
      <MainLayout>
        <HomeHeader />
        <div className="h-full w-full ">
          <Outlet />
        </div>
        <HomeFooter />
      </MainLayout>
      hi
      <div className="h-[180px] bg-slate-400 w-full"></div>
    </>
  );
};

export default Home;
