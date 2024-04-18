import axios from "axios";
import { AuthServiceProps } from "../@types/auth-props";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";



export function useAuthService(): AuthServiceProps {
  const navigate = useNavigate();


  const getInitialLoggedInValue = () => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    return loggedIn !== null && loggedIn === "true";
  }

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    getInitialLoggedInValue
  );


  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login/`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const user_name = response.data.user.first_name;
      console.log('Welcome ', user_name)
      localStorage.setItem("user_name", user_name);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } catch (err: any) {
      setIsLoggedIn(false);
      return err.response.status;
    }
  };

  
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

  const logout = async () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
    navigate("/");

    try {
      await axios.post(
        `${BASE_URL}/auth/logout/`,
        {},
        { withCredentials: true }
      );
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  };

  return { login, isLoggedIn, logout };
}
