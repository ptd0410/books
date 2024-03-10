import { memo } from "react";
import { IIconItem, IconItem } from "../items";

interface ISubMenu {
  data: IIconItem[];
}
export const SubMenu = memo(({ data }: ISubMenu) => {
  return (
    <div className=" min-w-[200px] sub-menu">
      {data.map((item) => (
        <IconItem key={item.text} {...item} />
      ))}
    </div>
  );
});
