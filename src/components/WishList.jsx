import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const WishList = ({ product, handleWishListRemoveProduct }) => {
  const { id, product_title, product_image, description, price } = product;
  const navigate = useNavigate();
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl border my-5 p-5 rounded-2xl flex-col md:flex-row items-center relative">
        <figure>
          <div className="w-44 h-auto rounded-2xl">
            <img className="w-full" src={product_image} alt={product_title} />
          </div>
        </figure>
        <div className="card-body space-y-2 ">
          <h2 className="card-title text-2xl">{product_title}</h2>
          <p className="text-base text-[#09080F60]">{description}</p>
          <p className="font-semibold text-xl">Price: ${price}</p>
          <button
            onClick={() => navigate(`/product/${id}`)}
            className="btn bg-[#9538E2] w-1/6 text-white font-bold rounded-full"
          >
            Add To Card <IoCartOutline size={22} />
          </button>
          <button
            onClick={() => handleWishListRemoveProduct(id)}
            className="absolute top-0 right-2 md:top-1 md:right-3 text-red-600"
          >
            <IoCloseCircleOutline size={40} />
          </button>
        </div>
      </div>
    </>
  );
};

export default WishList;
