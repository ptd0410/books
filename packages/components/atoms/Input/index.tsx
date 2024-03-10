import classNames from "classnames";
import React, { ReactNode, forwardRef } from "react";

interface IInput {
  left?: ReactNode;
  right?: ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}
export const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { className, left, right, inputProps } = props;
  return (
    <div
      className={classNames(
        "flex items-center gap-3 h-10 px-5 rounded-lg border border-black",
        className
      )}
    >
      {left}
      <input
        {...inputProps}
        ref={ref}
        className="focus:outline-none bg-transparent h-full w-full"
      />
      {right}
    </div>
  );
});
