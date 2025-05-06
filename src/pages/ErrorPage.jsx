import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  document.title = "Error Page";
  console.log(error);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-[180px] font-black">404</h1>
          <p className="text-md text-gray-400">
            <span>&#128542;</span>Oops, This Page Not Found!
            <span>&#128542;</span>
          </p>
          <NavLink
            to="/"
            className="text-[#9538E2]">
            Back To Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
