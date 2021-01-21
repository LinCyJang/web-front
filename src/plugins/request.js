import axios from "axios";
import { getToken } from "./auth";
import store from "@/store/index";
import snackbar from "@/components/snackbar/index";

const service = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers["Authorization"] = "Bearer " + getToken();
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 1) {
      snackbar.start(res.msg, "#E53935", 2000);
      return Promise.reject(res);
    } else {
      return res;
    }
  },
  error => {
    console.log("err： >>>>  " + error);
    return Promise.reject(error);
  }
);

export default service;
