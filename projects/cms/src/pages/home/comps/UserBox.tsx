import { memo, useMemo } from "react";
import { AiOutlineUser } from "react-icons/ai";

const UserBox = memo(() => {
  const features = useMemo(
    () => [
      {
        icons: AiOutlineUser,
        text: "My Account",
        path: "",
      },
    ],
    []
  );

  return (
    <div className="flex items-center gap-3 bg-[#f3f5f7] p-4">
      <img
        src="https://ableproadmin.com/assets/images/user/avatar-1.jpg"
        alt="user-image"
        className=" h-11 w-11 rounded-full"
      />
      <div>
        <h6 className="font-medium">Jonh Smith</h6>
        <small>Administrator</small>
      </div>
    </div>
  );
});

export default UserBox;
