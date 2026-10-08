import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        return Promise.reject.error;
      }
      try {
        const resposne = await axios.post(`${API_URL}/Auth/refreshToken`, {
          refreshToken: refreshToken,
        });

        const { token, refreshToken: newRefreshToken } = resposne?.data;

        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", newRefreshToken);

        error.config.Authorization = `Bearer ${token}`;

        return axiosInstance(error.config);
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
export default axiosInstance;
