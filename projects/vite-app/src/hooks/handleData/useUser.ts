import { userModel } from "@@models/prod";
import { apiClient } from "@api";
import { useLoading } from "@hooks/useLoading";
import { useEffect, useState } from "react";

export const useUser = () => {
  const { loading, setLoading, onErr } = useLoading();
  const [user, setUser] = useState<IUser>(userModel);

  const getUser = async () => {
    try {
      const url = "";
      setLoading(true);
      const res = await apiClient.get(url);
      setLoading(false);
      setUser(res.data);
    } catch (error) {
      onErr(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return {
    loading,
    user,
  };
};
