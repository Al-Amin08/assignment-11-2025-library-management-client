import React, { useContext } from "react";
import Loader from "../Loader/Loader";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  //   const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
