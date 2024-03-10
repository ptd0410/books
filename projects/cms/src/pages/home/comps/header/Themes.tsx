import { RIcon } from "@@components";
import { ISubMenu, SubMenuWrap } from "@components";
import { IIconItem, IconItem } from "@components/atoms/items";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Themes = memo(() => {
  const [isDark, setIsDark] = useState(false);
  const ref = useRef<ISubMenu>(null);

  const handleClickItem = useCallback(
    (isDark) => () => {
      setIsDark(isDark);
      ref.current?.close();
    },
    []
  );

  const _list = useMemo<IIconItem[]>(
    () => [
      { icon: MdLightMode, text: "Light", onClick: handleClickItem(false) },
      { icon: MdDarkMode, text: "Dark", onClick: handleClickItem(true) },
    ],
    []
  );

  return (
    <div className="relative flex items-center">
      <RIcon
        Icon={isDark ? MdDarkMode : MdLightMode}
        className="icon"
        onClick={() => ref.current?.open()}
      />
      <SubMenuWrap ref={ref} className="min-w-[200px]">
        {_list.map((item) => (
          <IconItem key={item.text} {...item} />
        ))}
      </SubMenuWrap>
    </div>
  );
});
