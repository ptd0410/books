import classNames from "classnames";
import React from "react";

const MainLayout = ({ children, className = "" }) => {
  return (
    <div className={classNames("flex flex-col h-full w-full", className)}>
      {children}
    </div>
  );
};

export default React.memo(MainLayout);
