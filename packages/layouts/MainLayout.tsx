import classNames from "classnames";
import React, { memo, PropsWithChildren } from "react";

interface IMainLayout extends PropsWithChildren {
  className?: string;
}
const MainLayout = memo(({ className, children }: IMainLayout) => {
  return (
    <div className={classNames("flex flex-col h-full w-full", className)}>
      {children}
    </div>
  );
});

export default MainLayout;
