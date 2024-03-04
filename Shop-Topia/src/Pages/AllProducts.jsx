import React from "react";
import PageNavbar from "../Common/PageNavbar";
import Footer from "../Components/Footer/Footer";
import getData from "../Data/Data";
import SideBar from "../Components/SideBar/SideBar";

const AllProducts = () => {
  const data = getData() || [];
  return (
    <div className="">
      <div>
        <PageNavbar />
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-16 py-24 max-sm:pt-48 ">
        <div className="self-end">
          <SideBar />
        </div>
        <div
          data-aos="zoom-out-up"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
        >
          {data.length > 0
            ? data.map((e, index) => {
                return (
                  <div key={index} className="hover:shadow-2xl">
                    <div className="card w-full h-full bg-[#ece3ca]">
                      <figure>
                        <img
                          src={e.image}
                          alt="car!"
                          className="h-60 w-full object-contain mix-blend-multiply"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{e.title.slice(0, 50)}</h2>
                        <p>{e.description.slice(0, 100)}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-neutral">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="px-4 md:px-10 pb-10">
        <Footer />
      </div>
    </div>
  );
};

export default AllProducts;
