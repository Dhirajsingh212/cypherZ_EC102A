import React from "react";

const ProductsCard = ({ image, title, description }) => {
  return (
    <div className="card w-full h-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-60 mix-blend-multiply object-contain w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title.slice(0, 25)}
          <div className="badge badge-accent">NEW</div>
        </h2>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions justify-center md:justify-end pt-5">
          <button className="btn btn-neutral">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
