import { appCl } from "@@constants";
import React, { memo } from "react";
import { FaPlus } from "react-icons/fa6";

interface IAddBtn {
  text: string;
  onClick?: () => void;
}
const AddBtn = memo(({ text, onClick }: IAddBtn) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 h-10 rounded-lg text-white"
      style={{
        background: appCl,
      }}
    >
      <FaPlus className="text-[206x]" />
      <p className="font-bold text-[12px]">{text}</p>
    </button>
  );
});

export default AddBtn;
