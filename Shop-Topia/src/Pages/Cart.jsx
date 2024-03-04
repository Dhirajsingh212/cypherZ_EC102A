import React from "react";
import PageNavbar from "../Common/PageNavbar";
import CartTable from "../Components/CartTable/CartTable";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  return (
    <div className="flex flex-col gap-10">
      <PageNavbar />
      <div className="rounded-2xl shadow-xl max-sm:mt-52 max-sm:mx-2 lg:px-20 lg:py-24 bg-white md:mx-20 md:my-24">
        <CartTable />
      </div>
      <div className="flex justify-center">
        <button className="active:shadow-sm shadow-xl bg-slate-800 text-white px-16 py-2 rounded-md">
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
