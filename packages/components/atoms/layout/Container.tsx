import classNames from "classnames";
import React from "react";

const Container = ({ children, className = "" }) => {
  return <div className={classNames("px-5", className)}>{children}</div>;
};

export default React.memo(Container);
