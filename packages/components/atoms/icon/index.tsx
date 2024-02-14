import React from "react";

const Icon = ({ RIcon, className = "", onClick = () => {} }) => {
  return <RIcon className={className} onClick={onClick} />;
};

export default React.memo(Icon);
