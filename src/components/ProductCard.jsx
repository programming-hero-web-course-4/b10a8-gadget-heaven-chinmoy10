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
      const filteredByCategory = [...productsData].filter((product) => product.category === category
      )
      setProducts(filteredByCategory);
      
    }
  }, [productsData, category]);
  console.log(products);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            products.length === 0? "Not Availavle":products.map((product,i) => <Card key={i} product={product}></Card>)
        }
    </div>
    </>
  );
};

export default ProductCard;
