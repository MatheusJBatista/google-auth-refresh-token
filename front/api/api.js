import axios from "axios";
import axiosRetry from "axios-retry";
import * as localStorageUtility from "../utility/local-storage-utility";
import { getToken } from "./token/token";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorageUtility.getIdToken()}`,
    "x-refresh-token": localStorageUtility.getRefreshToken(),
  },
});

const setTokensOnError = async (error) => {
  if (error.response?.status === 401) {
    const { id_token } = await getToken(localStorageUtility.getRefreshToken());
    localStorageUtility.setIdToken(id_token);
  }
};

axiosRetry(instance, {
  retries: 2,
  retryCondition: async (err) => {
    return true;
  },
});

instance.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorageUtility.getIdToken()}`;
  request.headers["x-refresh-token"] = localStorageUtility.getRefreshToken();

  console.log(
    request.headers["x-refresh-token"],
    request.headers.Authorization
  );

  return request;
});

instance.interceptors.response.use(
  (response) => response?.data,
  setTokensOnError
);

export default instance;
