import React from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import getData from "../../Data/Data";

const Products = () => {
  const data = getData() || [];
  return (
    <div
      className="flex flex-col gap-8"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <p className="text-2xl text-slate-700 font-semibold">
        Newly Arrived Products
      </p>
      <div
        data-aos="fade-right"
        className="md:px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
      >
        {data.length > 0
          ? data.slice(0, 9).map((e) => {
              return (
                <div key={e.id}>
                  <ProductsCard
                    title={e.title}
                    image={e.image}
                    description={e.description}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Products;
