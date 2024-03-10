import React, { memo } from "react";
import { footerData } from "./mock";
import Icon from "@@components/icon";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

const HomeFooter = memo(() => {
  const pathname = useLocation().pathname;
  const nav = useNavigate();

  return (
    <div className="flex items-center py-3 shadow-1">
      {footerData.map((item) => {
        const check = pathname === item.path;

        return (
          <div
            className="flex flex-col items-center gap-[2px] w-full "
            key={item.path}
            onClick={() => nav(item.path)}
          >
            <Icon
              RIcon={check ? item.selectedIcon : item.icon}
              className={classNames(
                "text-[20px]",
                check ? "text-app" : "text-black"
              )}
            />
            <p
              className={classNames(
                "capitalize text-[12px]",
                check ? "text-app" : "text-black"
              )}
            >
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
});

export default HomeFooter;
