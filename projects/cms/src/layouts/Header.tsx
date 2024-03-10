import React, { ReactNode, memo } from "react";

interface IHeader {
  children?: ReactNode;
}
export const Header = memo(({ children }: IHeader) => {
  return <div className="py-6">{children}</div>;
});
