import { prodModel } from "@@models/prod";
import { apiClient } from "@api";
import { useLoading } from "@hooks/useLoading";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";

interface IProdQuery {}

export const useProd = (autoGetAll = false) => {
  const { loading, setLoading, onErr } = useLoading();
  const [allProd, setAllProd] = useState<IProd[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [prodDetail, setProdDetail] = useState(prodModel);

  const isMore = page < totalPage;

  const getProdDetail = async (prodId) => {
    try {
      const url = "";
      const queryData = { prodId };
      setLoading(true);
      const res = await apiClient.get(`${url}?${stringify(queryData)}`);
      setLoading(false);
      const data = res.data;
      console.log("prod detail res", data);
      setProdDetail(data);
    } catch (error) {
      onErr(error);
    }
  };

  const getAllProd = async (prodQuery?: IProdQuery) => {
    try {
      const url = "";
      const queryData = { page, ...prodQuery };
      setLoading(true);
      const res = await apiClient.get(`${url}?${stringify(queryData)}`);
      setLoading(false);
      const { data, totalPages } = res.data;
      if (page === 1) setTotalPage(totalPages);
      console.log("all prod res", data);
      setAllProd([...allProd, ...data]);
    } catch (error) {
      onErr(error);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!autoGetAll) return;
    getAllProd();
  }, [page]);

  return {
    isMore,
    loading,
    loadMore,
    prodDetail,
    getProdDetail,
  };
};
