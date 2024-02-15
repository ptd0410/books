import Input from "@@components/atoms/Input";
import Icon from "@@components/atoms/icon";
import Container from "@@components/atoms/layout/Container";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const HomeHeader = React.memo(() => {
  return (
    <Container className="flex items-center gap-5 bg-app py-3">
      <Input className="w-full border bg-white" />
      <Icon RIcon={IoNotificationsOutline} className="text-[24px] text-white" />
    </Container>
  );
});

export default HomeHeader;
