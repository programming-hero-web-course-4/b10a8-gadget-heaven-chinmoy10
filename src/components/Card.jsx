import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
//   console.log(product);
  const { id, product_title, product_image, price } = product || {};
  return (
    <>
      <div className="card bg-white shadow-md border">
        <figure className="px-5">
          <img src={product_image} alt={product_title} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{product_title}</h2>
          <p className="text-lg text-[#09080F60] font-semibold">
            Price: ${price}
          </p>
          <div className="card-actions">
            <Link to={`/product/${id}`}>
            <button className="btn rounded-full border-2 border-[#9538E2] text-lg font-semibold text-[#9538E2] bg-none hover:bg-[#9538E2] hover:text-white">
              View Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
