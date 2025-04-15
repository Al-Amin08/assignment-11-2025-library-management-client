import toast from "daisyui/components/toast";
import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import loginPic from "../../assets/Animation - 1744700521748.json";
import Lottie from "lottie-react";

const Login = () => {
  const { signInUser, googleProvider, auth, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((res) => {
        navigate(location?.state || "/");
        toast.success("Login Successfully");
      })
      .catch((err) => toast.error(err));
  };

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        navigate(location?.state || "/");
        setUser(res.user);

        toast.success("Login Successfully");
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className="flex justify-center items-center min-h-screen lg:w-full mx-auto px-4 flex-row-reverse gap-20">
      {/* Toast */}
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <div className="w-1/6">
        <Lottie className="" animationData={loginPic} loop />
      </div>
      <div className="card bg-base-100 w-1/4 shadow-2xl ">
        <form onSubmit={handleLogin} ame="card-body  ">
          <h1 className="text-5xl font-bold text-center  text-[#333333] pt-10 pb-4">
            Login now!
          </h1>
          <fieldset className="fieldset px-5 py-7">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              autoComplete="email"
              // ref={emailRef}
            />
            <label className="fieldset-label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
            />

            <button className="btn bg-[#F4C724] text-[#333333] mt-4 ">
              Login
            </button>
          </fieldset>
        </form>
        <p className="text-center pb-5 text-[#575757]">Or continue with</p>
        <p
          onClick={handleSignInWithGoogle}
          className="font-medium btn bg-white border-none shadow-md w-2/3 mx-auto mb-5 text-[#333333]"
        >
          <FcGoogle /> Sign in with Google
        </p>
        <p className="text-center font-medium pb-3 pt-2 text-[#333333]">
          Don't Have An Account?{" "}
          <Link className="font-bold text-[#20B2AA]" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
