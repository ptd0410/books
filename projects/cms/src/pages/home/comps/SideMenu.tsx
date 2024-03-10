import React, { memo } from "react";
import UserBox from "./UserBox";
import { Header } from "@layouts";
import { IconItem } from "@components/atoms/items";
import { homeRouter } from "@routers";
import { useNavigate } from "react-router-dom";

const SideMenu = memo(() => {
  const nav = useNavigate();

  return (
    <div className="w-[300px] h-full overflow-y-scroll px-4 border-r border-black">
      <Header>
        <a href="../dashboard/index.html" className="b-brand text-primary">
          <img
            src="https://ableproadmin.com/assets/images/logo-dark.svg"
            className="img-fluid logo-lg"
            alt="logo"
          />
          <span className="badge bg-light-success rounded-pill ms-2 theme-version">
            v9.0
          </span>
        </a>
      </Header>
      <UserBox />
      <div className="flex flex-col">
        {homeRouter.map((item) => (
          <IconItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            onClick={() => nav(item.path)}
          />
        ))}
      </div>
    </div>
  );
});

export default SideMenu;
