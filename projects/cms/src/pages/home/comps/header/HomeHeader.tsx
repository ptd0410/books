import { memo, useMemo } from "react";
import { IoMenuSharp, IoSearch } from "react-icons/io5";
import { Themes } from "./Themes";
import { RIcon } from "@@components";
import Search from "./Search";
import User from "./User";

const HomeHeader = memo(() => {
  const _left = useMemo(
    () => [
      {
        icon: IoMenuSharp,
        onClick: () => {},
      },
    ],
    []
  );

  const _right = useMemo(() => [], []);

  return (
    <div className="header flex items-center justify-between">
      <div className="flex items-center gap-3">
        {_left.map((item, i) => (
          <RIcon Icon={item.icon} key={i} className="text-[24px]" />
        ))}
        <Search />
      </div>
      <div className="flex items-center gap-3">
        <Themes />
        <User />
      </div>
    </div>
  );
});

export default HomeHeader;
