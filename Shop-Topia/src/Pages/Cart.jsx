import CartTable from "../Components/CartTable/CartTable";

const Cart = () => {
  return (
    <div className="flex flex-col  gap-10 py-10">
      <div className=" bg-[#ece3ca] rounded-2xl shadow-xl max-sm:mt-64 max-sm:mx-2 lg:px-20 lg:pt-24  md:mx-20 md:mt-40">
        <CartTable />
      </div>
      <div className="flex justify-center">
        <button className="active:shadow-sm shadow-xl bg-neutral text-white px-16 py-2 rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
