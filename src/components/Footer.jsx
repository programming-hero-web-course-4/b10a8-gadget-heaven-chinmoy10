import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-base-200 text-black p-5">
        <footer className="flex flex-col items-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Gadget Heaven</h1>
            <p className="text-[#09080F60] font-medium">Leading the way in cutting-edge technology and innovation</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly text-center py-10 w-10/12 mx-auto">
          <nav className="flex flex-col space-y-3 text-black">
              <h6 className="text-xl font-semibold">Services</h6>
              <a className="text-md font-light cursor-pointer">Product Support
              </a>
              <a className="text-md font-light cursor-pointer">
              Order Tracking
              </a>
              <a className="text-md font-light cursor-pointer">
              Shipping & Delivery
              </a>
              <a className="text-md font-light cursor-pointer">
              Returns
              </a>
            </nav>
            <nav className="flex flex-col space-y-3 text-black">
              <h6 className="text-xl font-semibold">Company</h6>
              <a className="text-md font-light cursor-pointer">About Us
              </a>
              <a className="text-md font-light cursor-pointer">
              Careers
              </a>
              <a className="text-md font-light cursor-pointer">
                Contact
              </a>
            </nav>
            <nav className="flex flex-col space-y-3 text-black">
              <h6 className="text-xl font-semibold">Legal</h6>
              <a className="text-md font-light cursor-pointer">Terms of Service
              </a>
              <a className="text-md font-light cursor-pointer">
              Privacy Policy
              </a>
              <a className="text-md font-light cursor-pointer">
              Cookie Policy
              </a>
            </nav>
          </div>
        </footer>
        <p className="font-light text-sm text-[#09080F60] text-center">
          &#64;2025 Company All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
