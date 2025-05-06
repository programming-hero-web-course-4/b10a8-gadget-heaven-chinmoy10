import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Heading from "../components/Heading";

const Statistics = () => {
  document.title = "Statistics | Gadget Heaven";

  const productData = useLoaderData();

  return (
    <>
      <div className="hero bg-[#9538E2] mb-8 md:mb-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <Heading
              title={"Statistics"}
              subTitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            ></Heading>
          </div>
        </div>
      </div>
      <div className="my-8 md:my-16">
        <div className="flex flex-col items-center gap-10">
          <div>
            <BarChart
              width={850}
              height={500}
              data={productData}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="product_title" />
              <YAxis dataKey="price" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="price"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
