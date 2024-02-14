import { lcKey } from "@config";
import axios from "axios";

const token = lcKey.TOKEN;
const baseURL = "";

export const apiClient = axios.create({
  baseURL,
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
    if (error.response?.status === 401) {
      localStorage.removeItem(token);
      window.location.href = "/";
    }
    throw error;
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
