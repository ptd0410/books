import { RIcon } from "@@components";
import classNames from "classnames";
import React, { memo } from "react";
import { IconType } from "react-icons";

export interface IIconItem {
  text: string;
  icon: IconType;
  onClick?: () => void;
}
export const IconItem = memo(({ text, icon, onClick }: IIconItem) => {
  return (
    <div
      className={classNames(
        "flex items-center gap-3 py-2",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <RIcon Icon={icon} className="text-[20px]" />
      <p>{text}</p>
    </div>
  );
});
