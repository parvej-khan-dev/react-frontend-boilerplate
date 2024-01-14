import { axiosClient } from ".";
import routes from "./routes";
// API functions for different actions
const loginUser = (data) => {
  return apiClient.post(routes.auth.login, data);
};

const registerUser = (data) => {
  return apiClient.post(routes.auth.register, data);
};



export { loginUser, registerUser };
