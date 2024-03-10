import React, { memo } from "react";
import { IconType } from "react-icons";

interface IRIcon {
  Icon: IconType;
  className?: string;
  onClick?: () => void;
}
export const RIcon = memo(({ Icon, className, onClick }: IRIcon) => {
  return <Icon className={className} onClick={onClick} />;
});
