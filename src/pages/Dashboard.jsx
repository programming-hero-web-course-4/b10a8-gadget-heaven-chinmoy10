import React from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";

const Dashboard = () => {
  const productData = useLoaderData();
  console.log(productData);
  return (
    <>
      <div className="hero bg-[#9538E2] pb-10">
        <div className="hero-content text-center flex-col">
          <div className="max-w-4xl">
            <Heading
              title={"Dashboard"}
              subTitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            ></Heading>
          </div>
          <div>
            <button className="btn">Add</button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
