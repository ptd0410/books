import MainLayout from "@@components/atoms/layout/MainLayout";
import HomeHeader from "@pages/home/header";
import React from "react";

const Search = () => {
  return (
    <MainLayout>
      <HomeHeader />
    </MainLayout>
  );
};

export default React.memo(Search);
