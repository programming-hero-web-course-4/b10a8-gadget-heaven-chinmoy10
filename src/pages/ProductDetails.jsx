import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";

const ProductDetails = () => {
  const { product_id } = useParams();
  const productsData = useLoaderData();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleProduct = productsData.find(
      (product) => product.product_id === product_id
    );
    setProduct(singleProduct);
  }, [productsData, product_id]);

  const {
    product_id: id,
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  return (
    <>
      <div className="hero bg-[#9538E2]">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <Heading
              title={"Product Details"}
              subTitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            ></Heading>
          </div>
        </div>
      </div>
      <div className="hero bg-white max-w-5xl mx-auto border shadow-lg rounded-2xl p-10">
        <div className="hero-content flex-col lg:flex-row flex-1">
          <img
            src={product_image}
            className=""
          />
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">{product_title}</h1>
            <p className="text-lg font-semibold text-[#09080F80]">Price: ${price}</p>
            <p className={`max-w-fit py-1 px-3 rounded-full
                ${availability ? "bg-green-100 border border-green-700 text-green-700":"bg-red-300 border border-red-600 text-red-600"}`
            }>{`${availability? "In Stock":"Out Of Stock"}`}</p>
            <p className="text-base text-[#09080F60]">
              {description}
            </p>
            <p><b className="text-lg">Specification:</b> <br />
            {
                specification && specification.map((spec,i)=>(
                    <ul key={i} className="list-disc text-[#09080F60] pl-5">
                        <li>{spec}</li>
                    </ul>
                ))
            }
            </p>
            <p><b>Rating:</b> <br/>
                <div className="flex items-center gap-3">
                    <div className="rating rating-xs space-x-1">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                    </div>
                    <div className="bg-base-300 px-3 py-1 rounded-full">{rating}</div>
                </div>
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
