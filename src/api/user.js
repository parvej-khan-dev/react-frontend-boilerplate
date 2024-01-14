import { axiosClient } from ".";
import routes from "./routes";

const getCurrentUser = () => {
  return axiosClient.get(routes.user.getCurrentUser);
};

export { getCurrentUser };
