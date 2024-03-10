import { ISubMenu, SubMenuWrap } from "@components";
import { IIconItem, IconItem } from "@components/atoms/items";
import { memo, useMemo, useRef } from "react";

import { FaLock } from "react-icons/fa";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";

const User = memo(() => {
  const ref = useRef<ISubMenu>(null);

  const _list = useMemo<IIconItem[]>(
    () => [
      {
        text: "Setting",
        icon: IoSettingsOutline,
      },
      {
        text: "Change password",
        icon: FaLock,
      },
      {
        text: "Log out",
        icon: IoLogOutOutline,
      },
    ],
    []
  );

  const hihii = () => {};
  return (
    <div className="relative">
      <img
        onClick={() => ref.current?.open()}
        src="https://ableproadmin.com/assets/images/user/avatar-1.jpg"
        alt="user-image"
        className=" h-11 w-11 rounded-full"
      />
      <SubMenuWrap ref={ref}>
        <div className=" min-w-[200px] sub-menu">
          {_list.map((item) => (
            <IconItem key={item.text} {...item} />
          ))}
        </div>
      </SubMenuWrap>
    </div>
  );
});

export default User;
