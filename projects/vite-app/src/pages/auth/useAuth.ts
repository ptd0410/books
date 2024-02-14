import useQuery from "@@hooks/useQuery";
import { apiClient } from "@api";
import { useLoading } from "@hooks/useLoading";
import { useCallback, useRef, useState } from "react";

const authData = {
  username: "",
  pass: "",
  cfPass: "",
};

export const useAuth = () => {
  const { params } = useQuery();
  const { loading, setLoading, onErr } = useLoading();

  const isLogin = params?.type === "login";
  const data = useRef({ ...authData });

  const [showPass, setShowPass] = useState(true);
  const inputName = Object.keys(authData);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    data.current[name] = value;
  }, []);

  const onSubmit = async () => {
    try {
      const url = isLogin ? "" : "";
      setLoading(true);
      const res = await apiClient.post(url, {
        username: data.current.username,
        password: data.current.pass,
      });
      setLoading(false);

      console.log("res auth --->", res.data);
    } catch (error) {
      onErr(error);
    }
  };

  return {
    isLogin,
    showPass,
    onChange,
    setShowPass,
    inputName,
    onSubmit,
    loading,
  };
};
