import axios from "axios";
import { refreshTokenApi } from "./Login";

const apiDefault = () => {
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "access-token": localStorage.getItem("accessToken")
    }
  });
  instance.interceptors.response.use(
    res => res,
    err => {
      const { status } = err.response;
      if (status === 403 || status === 401) {
        refreshTokenApi();
      }
      return Promise.reject(err);
    }
  );

  return instance;
};
export default apiDefault;
