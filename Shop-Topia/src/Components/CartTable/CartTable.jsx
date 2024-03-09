import React from "react";
import { useSelector } from "react-redux";

const CartTable = () => {
  const { products, isFetching, isError } = useSelector(
    (state) => state.productsReducer
  );
  return (
    <div className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Price(₹)</th>
            <th className="text-center">Quantity</th>
            <th>Total Price(₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products.length > 0
            ? products.map((e) => {
                return (
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={e.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {e.title.slice(0, 50)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{e.price}</td>
                    <td>
                      <div>
                        <div className="join">
                          <button className="join-item btn">-</button>
                          <p className="join-item btn">10</p>
                          <button className="join-item btn">+</button>
                        </div>
                      </div>
                    </td>
                    <td>{Math.round(e.price * 10)}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Remove</button>
                    </th>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
