import classNames from "classnames";
import React, { ReactNode } from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  left?: ReactNode;
  right?: ReactNode;
}
const Input = ({ className, left, right, ...props }: IInput) => {
  return (
    <div
      className={classNames(
        "flex items-center gap-3 py-3 rounded-xl",
        className
      )}
    >
      {left}
      <input
        {...props}
        className="focus:outline-none bg-transparent h-full w-full"
      />
      {right}
    </div>
  );
};

export default React.memo(Input);
