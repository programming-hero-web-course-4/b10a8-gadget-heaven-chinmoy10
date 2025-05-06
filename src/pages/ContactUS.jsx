import React from "react";
import Heading from "../components/Heading";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";

const ContactUS = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 md:mx-44">
          <div>
            <div className="flex flex-col items-center gap-2 py-5">
              <div>
                <FaPersonCircleQuestion size={100} />
              </div>
              <h4 className="text-lg font-bold">Have Any Question?</h4>
            </div>
            <div className="pl-4 border-t-2 space-y-4 py-8">
              <p className="text-sm text-gray-400">INFORMATION QUESTIONS</p>
              <h2 className="text-xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <div className="border-t-2">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-b">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div><FcCustomerSupport size={100} /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
