import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../services/AuthServices";
import { BASE_URL } from "../config";

const useAxiosWithJwtInterceptor = () => {
  const jwtAxios = axios.create({});
  const navigate = useNavigate();
  const { logout } = useAuthService();


  jwtAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 || error.response.status === 403) {
        axios.defaults.withCredentials = true;

        try {
          const response = await axios.post(
            `${BASE_URL}/auth/token/refresh/`,
            {},
            { withCredentials: true }
          );

          if (response.status == 200) {
            return jwtAxios(originalRequest);
          }
        } catch (refreshError) {
          logout();
          const goLogin = () => navigate("/login");
          goLogin();
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  return jwtAxios;
};
export default useAxiosWithJwtInterceptor;

// const refreshAccessToken = async () => {
//   try {
//     const response = await axios.post(
//       `${BASE_URL}/auth/token/refresh/`,
//       {},
//       { withCredentials: true }
//     );
//     return response.status
//   } catch (refreshError) {
//     return Promise.reject(refreshError);
//   }
// };

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuthService } from "../services/AuthServices";

// const useAxiosWithJwtInterceptor = () => {
//   const jwtAxios = axios.create({});
//   const navigate = useNavigate();
//   const { logout } = useAuthService()

//   jwtAxios.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async (error) => {
//       const originalRequest = error.config;
//       if (error.response.status === 401 || error.response.status === 403) {
//         axios.defaults.withCredentials = true;

//           try {
//             const response = await axios.post(
//               "http://127.0.0.1:8000/api/token/refresh/"
//             );
//             if (response["status"] == 200) {
//               return jwtAxios(originalRequest);
//             }
//           } catch (refreshError) {
//             logout()
//             const goLogin = () => navigate("/login");
//             goLogin();
//             return Promise.reject(refreshError);
//           }

//       }
//       return Promise.reject(error);
//     }
//   );
//   return jwtAxios;
// };
// export default useAxiosWithJwtInterceptor;
