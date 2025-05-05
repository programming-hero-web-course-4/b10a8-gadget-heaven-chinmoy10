import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCard = () => {
  const productsData = useLoaderData();
  //   console.log(productsData);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...productsData].filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    } else {
      setProducts(productsData.slice(0, 7));
    }
  }, [productsData, category]);
  // console.log(products);
  return (
    <>
      {products.length === 0 ? (
        <>
          <div className="border-2 p-5 rounded-2xl">
            <div className="flex items-center justify-center bg-[#d7a5ff59] p-24 lg:p-44 rounded-2xl">
              <div className="text-3xl font-semibold">No Product Available</div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))}
        </div>
      )}

      <button className="btn rounded-full border-2 border-[#9538E2] text-lg font-semibold text-white bg-[#9538E2] mt-5" onClick={()=> setProducts(productsData)}>All Products</button>
    </>
  );
};

export default ProductCard;
