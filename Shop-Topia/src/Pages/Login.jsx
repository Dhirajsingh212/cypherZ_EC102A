import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <div className="flex flex-row justify-between  mt-16 md:mt-32 border-x-4 h-[450px] shadow-2xl">
          <div className="max-lg:hidden">
            <img
              className="object-cover absolute top-20 w-[400px] h-[530px] mx-20 shadow-2xl"
              src="https://plus.unsplash.com/premium_photo-1709143099855-0fa88e8a6ac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full h-full lg:w-1/2 bg-slate-800 text-white flex flex-col gap-4 items-center justify-center shadow-xl">
            <h1 className="text-center text-3xl font-semibold">Log in</h1>
            <div className="px-4 flex flex-col gap-2">
              <div className="flex flex-row max-sm:flex-col max-sm:gap-2 gap-8 border-b-2 border-white">
                <label className="text-xl ">Email ID</label>
                <input
                  className="bg-inherit placeholder:text-white  focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex flex-row gap-5 max-sm:flex-col max-sm:gap-2 border-b-2 border-white">
                <label className="text-xl ">Password</label>
                <input
                  className="bg-inherit placeholder:text-white focus:outline-none"
                  type="email"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="py-2">
                <input className="scale-150 " type="checkbox" />
                <label className="font-medium px-2">Remember me</label>
              </div>
              <div>
                <button
                  className="bg-red-300 w-full py-2 rounded-md text-center font-medium"
                  type="submit"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  LOGIN
                </button>
              </div>
              <div className="flex flex-row justify-center">
                <p>don't have an account?</p>
                <button
                  className="hover:text-blue-700 font-semibold"
                  type="submit"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
