import React from "react";
import PageNavbar from "../Common/PageNavbar";
import CartTable from "../Components/CartTable/CartTable";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const changeHandler = () => {
    navigate("/products");
  };
  return (
    <div className="flex flex-col gap-10">
      <PageNavbar changeHandler={changeHandler} />
      <div className=" bg-[#ece3ca] rounded-2xl shadow-xl max-sm:mt-64 max-sm:mx-2 lg:px-20 lg:pt-24  md:mx-20 md:mt-40">
        <CartTable />
      </div>
      <div className="flex justify-center">
        <button className="active:shadow-sm shadow-xl bg-neutral text-white px-16 py-2 rounded-md">
          Checkout
        </button>
      </div>
      <div className="px-4 pb-4 md:px-10 md:pb-10">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
