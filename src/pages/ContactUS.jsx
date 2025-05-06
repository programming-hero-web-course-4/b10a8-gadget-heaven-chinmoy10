import React from "react";
import Heading from "../components/Heading";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";

const ContactUS = () => {
  document.title = "Contact Us | Gadget Heaven";
  return (
    <>
      <div className="mb-20">
        <div className="hero bg-[#9538E2] pb-1 mb-10">
          <div className="hero-content text-center flex-col">
            <div className="max-w-4xl">
              <Heading
                title={"Contact Us"}
                subTitle={
                  "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                }
              ></Heading>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0 lg:mx-44">
          <div className="lg:border-r lg:pr-10">
            <div className="flex flex-col items-center gap-2 py-5">
              <div>
                <FaPersonCircleQuestion size={100} />
              </div>
              <h4 className="text-lg font-bold">Have Any Question?</h4>
            </div>
            <div className="pl-4 border-t space-y-4 py-8">
              <p className="text-sm text-gray-400">INFORMATION QUESTIONS</p>
              <h2 className="text-xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <div className="border-t">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-b">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-gray-500 font-medium">
                    Where is your office?
                  </div>
                  <div className="collapse-content">
                    <p className="font-extralight text-gray-400">Our Technical Office address: Dhaka Bangladesh</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-gray-500 font-medium">
                  Can I pick product from your office? 
                  </div>
                  <div className="collapse-content">
                    <p className="font-extralight text-gray-400">Sorry we don’t provide this facility. Maybe you will get it in future.</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-gray-500 font-medium">
                  Can I check the product before buy?
                  </div>
                  <div className="collapse-content">
                    <p className="font-extralight text-gray-400">Yes you can, if you don’t like it then you can return it instantly.</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-gray-500 font-medium">
                  How do you confirm order?
                  </div>
                  <div className="collapse-content">
                    <p className="font-extralight text-gray-400">We confirm order in 3 steps, SMS, email and finally call.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pl-10">
              <div className="flex flex-col items-center gap-2 py-5">
                <div>
                  <FcCustomerSupport size={100} />
                </div>
                <h4 className="text-lg font-bold">Need Help?</h4>
              </div>
              <div className="border-t py-8">
                <div className="space-y-4 ">
                  <p className="text-sm text-gray-400">CONTACT INFORMATION</p>
                  <h2 className="text-xl font-bold">FOR CUSTOMERS</h2>
                </div>
                <div className="flex items-center pt-9 gap-6">
                  <div>
                    <MdOutlineContactPhone size={65} />
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-400 font-extralight text-sm">
                      support@gadgetheaven.com
                    </p>
                    <p className="text-gray-400 font-extralight text-sm">
                      Helpline: 01XXXXXXXXX
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t ">
                <div className="pt-8 space-y-4">
                  <h2 className="text-xl font-bold">FOR BUSINESS PROPOSAL</h2>
                  <div className="flex items-center gap-6">
                  <FaRegHandshake size={40} />
                  <p className="text-gray-400 font-extralight text-sm">info@gadgetheaven.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
