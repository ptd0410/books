import axios from "axios";
import { apiIp } from "../config";

const token = "cmstoken";

export const apiClient = axios.create({
  baseURL: apiIp,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log('apiGetMemberRevenueList 2', error);
    const status = error.response?.status;
    if (status === 401) {
      localStorage.removeItem(token);
      window.location.href = "/";
    }
    // console.log("errrrrrrrrrrrrrrrrrrrr", error);
    throw error.response.data?.message || "Axios can not found message";
  }
);

apiClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem(token) || "";
    return config;
  },
  (error) => {
    console.log("err add reques config ==>", error);
    throw error;
  }
);

export * from "./get";
export * from "./post";
