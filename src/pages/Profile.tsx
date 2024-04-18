import { useState, useEffect } from "react";
import { useAuthServiceContext } from "../contexts/AuthContext";
import useAxiosWithInterceptor from "../services/jwtinterceptor";

import { BASE_URL } from "../config";




const Profile = () => {


  const [userDetails, setUserDetails] = useState("")
  const { isLoggedIn, logout } = useAuthServiceContext();
  const jwtAxios = useAxiosWithInterceptor();

  const getUserDetails = async () => {
    try {
      const response = await jwtAxios.get(`${BASE_URL}/profiles/me/`, {
        withCredentials: true,
      });
      const userData = response.data;
      setUserDetails(userData);
      const user_id = response.data.profile.id;
      localStorage.setItem("user_id", user_id);

      console.log("+1")
    } catch (err: any) {
      return err;
    }
  };

  useEffect(() => {
    getUserDetails()  
  }, [])
  


  return (
    <>
      <div>{isLoggedIn.toString()}</div>
      <button onClick={logout}>Logout</button>
      <div> userDetails: {userDetails.toString()}</div>
    </>
  );
};

export default Profile

