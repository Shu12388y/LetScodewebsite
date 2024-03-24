import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center" style={{ backgroundColor: "#DEE1E6" }}>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:mt-5">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mt-3 text-3xl md:text-5xl mb-6 md:mb-10 text-gray-900 font-bold">
              Explore More Than{" "}
              <span className="text-red-500 font-bold ml-2 md:ml-3">5,000</span>{" "}
              <br />
              <span className="text-green-500 ">Jobs & Internships</span>
            </h1>
            <p className="mb-4 md:mb-8 mr-0 leading-relaxed text-sm md:text-base">
              You Have the Skills. We Have the Job.Take the next
              <br /> step with elite engineering roles at leading companies
            </p>
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-gray-300 bg-white h-10 px-4 md:px-5 pr-14 rounded-lg text-sm md:text-base focus:outline-none"
              />
              <button className="ml-2 md:ml-4 inline-flex items-center text-white bg-green-500 border-0 py-2 px-5 md:px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-base md:text-lg">
                Get Email
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              width={500}
              height={500}
              className="object-cover object-center rounded"
              alt="hero"
              src="/serviceimage.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
