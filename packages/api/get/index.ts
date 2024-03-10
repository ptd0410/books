import { apiClient } from "@@api";

export const getProdList = async (page?: number) => {
  const res = await apiClient.get(
    `/prod/prod-list${page ? `?page=${page}` : ""}`
  );
  return res.data.data;
};

export const getCateList = async (page?: number) => {
  const res = await apiClient.get(
    `/cate/cate-list${page ? `?page=${page}` : ""}`
  );
  return res.data.data;
};
