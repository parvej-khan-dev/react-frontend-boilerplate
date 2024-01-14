const baseURL = import.meta.env.VITE_BACKEND_URL;
import axios from "axios";
import { loginUser, registerUser } from "./auth";
import { getCurrentUser } from "./user";
import LocalStorage from "../providers/localstorage";

const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 120000,
});

// Add an interceptor to set authorization header with user token before requests
axiosClient.interceptors.request.use(
  function (config) {
    // Retrieve user token from local storage
    const token = LocalStorage.get("token");
    // Set authorization header with bearer token
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosClient, loginUser, registerUser, getCurrentUser };
