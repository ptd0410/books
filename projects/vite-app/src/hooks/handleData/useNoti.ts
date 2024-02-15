import { apiClient } from "@api";
import { useLoading } from "@hooks/useLoading";
import { stringify } from "qs";
import { useEffect, useState } from "react";

export const useNoti = (autoGetAll = false) => {
  const { loading, setLoading, onErr } = useLoading();

  const [allNoti, setAllNoti] = useState<INoti[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const isMore = page < totalPage;

  const loadMore = () => {
    setPage(page + 1);
  };

  const getAllNoti = async () => {
    try {
      const url = "";
      const queryData = { page };
      setLoading(true);
      const res = await apiClient.get(`${url}?${stringify(queryData)}`);
      setLoading(false);
      const { data, totalPages } = res.data;
      if (page === 1) setTotalPage(totalPages);
      console.log("all prod res", data);
      setAllNoti([...allNoti, ...data]);
    } catch (error) {
      onErr(error);
    }
  };

  useEffect(() => {
    if (!autoGetAll) return;
    getAllNoti();
  }, [page]);

  return {
    isMore,
    loadMore,
    allNoti,
    loading,
  };
};
