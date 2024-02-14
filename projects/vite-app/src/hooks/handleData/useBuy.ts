import { apiClient } from "@api";
import { useLoading } from "@hooks/useLoading";

export const useBuy = () => {
  const { loading, setLoading, onErr } = useLoading();

  const buyProd = async (data: IBuyProd) => {
    try {
      const url = "";
      setLoading(true);
      const res = await apiClient.post(url, data);
      setLoading(false);
      console.log("res buy prod --->", res.data);
    } catch (error) {
      onErr(error);
    }
  };

  return {
    loading,
    buyProd,
  };
};
