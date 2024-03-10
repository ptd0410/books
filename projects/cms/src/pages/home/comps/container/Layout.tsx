import React, { ReactNode, memo } from "react";

interface ILayout {
  children: ReactNode;
  title: string;
}
const Layout = memo(({ children, title }: ILayout) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <p className="underline">View all</p>
      </div>
      {children}
    </div>
  );
});

export default Layout;
