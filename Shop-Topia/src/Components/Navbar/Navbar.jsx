import React from "react";
import logo from "../../Images/logo.png";
import DropDown from "../../Common/DropDown";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="px-4 md:px-10 pb-4 flex flex-row justify-between items-center">
      <div className="md:h-24 md:w-24 h-20 w-20">
        <img className="rounded-b-2xl" src={logo} alt="logo" />
      </div>
      <div className="flex flex-row-reverse lg:flex-row items-center lg:gap-8">
        <div className="lg:hidden">
          <DropDown></DropDown>
        </div>
        <div className="text-lg lg:flex hidden">
          <ul className="flex flex-row gap-4">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer font-semibold hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/products");
              }}
              className="cursor-pointer font-semibold hover:text-primary"
            >
              Products
            </button>
            <button
              onClick={() => {
                navigate("/cart");
              }}
              className="cursor-pointer font-semibold hover:text-primary"
            >
              Cart
            </button>
            <button className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </button>
          </ul>
        </div>
        <div className="max-lg:hidden">
          <ul className="font-bold flex flex-row gap-4">
            <li>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="active:shadow-sm px-10 py-2 rounded-2xl text-white bg-orange-300 shadow-md"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="shadow-md  active:shadow-sm px-10 py-2 rounded-2xl text-white bg-yellow-500"
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
