import React from "react";
import PageNavbar from "../Common/PageNavbar";
import Footer from "../Components/Footer/Footer";
import getData from "../Data/Data";

const AllProducts = () => {
  const data = getData() || [];
  return (
    <div className="">
      <div>
        <PageNavbar />
      </div>
      <div
        data-aos="zoom-out-up"
        className="px-4 md:px-16 py-24 max-sm:pt-48 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
      >
        {data.length > 0
          ? data.map((e, index) => {
              return (
                <div key={index} className="hover:shadow-2xl">
                  <div className="card w-full h-full bg-white">
                    <figure>
                      <img
                        src={e.image}
                        alt="car!"
                        className="h-60 w-full object-contain"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{e.title.slice(0, 50)}</h2>
                      <p>{e.description.slice(0, 100)}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className="px-4 md:px-10 pb-10">
        <Footer />
      </div>
    </div>
  );
};

export default AllProducts;
