import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosInstance = axios.create({
  baseURL: "https://assignment-11-server-2025.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logOut()
            .then(() => {
              // redirect to the login page
              navigate("/login");
            })
            .catch((err) => err);
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
