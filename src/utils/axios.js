import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blog-application-server-46m4.onrender.com",
});

export default axiosInstance;
