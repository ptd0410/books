import Input from "@@components/atoms/Input";
import Icon from "@@components/atoms/icon";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "./useAuth";

const Auth = () => {
  const { inputName, isLogin, onChange, setShowPass, showPass } = useAuth();

  const renderEye = React.useCallback(
    (name) => {
      if (name !== "pass" && name !== "cfPass") return <></>;
      return (
        <Icon
          RIcon={showPass ? FaEye : FaEyeSlash}
          onClick={() => setShowPass(!showPass)}
        />
      );
    },
    [showPass]
  );

  return (
    <div>
      <p>{isLogin ? "Login" : "Register"}</p>
      <div className="flex flex-col gap-5">
        {inputName.map((item) => (
          <Input
            name={item}
            placeholder={"Type " + item}
            onChange={onChange}
            right={renderEye(item)}
          />
        ))}
      </div>
      <button className="py-3 px-6 mt-6">
        <p>{isLogin ? "Login" : "Register"}</p>
      </button>
    </div>
  );
};

export default Auth;
