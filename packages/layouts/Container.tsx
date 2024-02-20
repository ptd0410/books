import classNames from "classnames";
import React, { memo, PropsWithChildren } from "react";

interface IContainer extends PropsWithChildren {
  className?: string;
}
const Container = memo(({ children, className }: IContainer) => {
  return <div className={classNames("px-5", className)}>{children}</div>;
});

export default Container;
