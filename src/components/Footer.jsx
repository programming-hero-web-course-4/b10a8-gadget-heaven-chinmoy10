import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center bg-base-300 p-10">
        <div>
          <h2 className="font-bold text-3xl">Gadget Heaven</h2>
          <p className="text-[#09080F60] font-medium">
            Leading the way in cutting-edge technology and invention
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
