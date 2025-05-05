import React from "react";
import Banner from "../components/Banner";
import GadgetsCategories from "../components/GadgetsCategories";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  document.title="Home | Gadget Heaven";
  const categories = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="mt-[400px] md:mt-[250px] lg:mt-[500px] md:mx-44">
        <GadgetsCategories></GadgetsCategories>
        <div className="grid grid-cols-1 lg:grid-cols-4 my-10 gap-6 lg:gap-16">
          <div className="col-span-1">
            <div className="grid grid-cols-1">
              <Categories categories={categories}></Categories>
              
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3">
          <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
