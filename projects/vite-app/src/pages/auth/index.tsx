import Input from "@@components/Input";
import Icon from "@@components/icon";
import React, { useCallback } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "./useAuth";
import Container from "@@components/layout/Container";

const Auth = () => {
  const { inputName, isLogin, onChange, setShowPass, showPass, onSubmit } =
    useAuth();

  const renderEye = useCallback(
    (name) => {
      if (!isPass(name)) return <></>;
      return (
        <Icon
          RIcon={showPass ? FaEye : FaEyeSlash}
          onClick={() => setShowPass(!showPass)}
        />
      );
    },
    [showPass]
  );

  const inputType = useCallback(
    (name) => {
      if (isPass(name) && !showPass) return "password";
      return "text";
    },
    [showPass]
  );

  return (
    <Container className="flex flex-col items-center gap-5 justify-center pt-[100px]">
      <p className="text-app text-[24px] font-bold">
        {isLogin ? "Login" : "Register"}
      </p>
      <div className="flex flex-col gap-5 w-full">
        {inputName.map((item) => (
          <Input
            key={item}
            name={item}
            placeholder={"Type " + item}
            onChange={onChange}
            type={inputType(item)}
            right={renderEye(item)}
          />
        ))}
      </div>
      <button
        className="py-3 px-6 text-white bg-app rounded-md"
        onClick={onSubmit}
      >
        <p>{isLogin ? "Login" : "Register"}</p>
      </button>
    </Container>
  );
};

const isPass = (name) => {
  if (name === "pass" || name === "cfPass") return true;
  return false;
};

export default Auth;
