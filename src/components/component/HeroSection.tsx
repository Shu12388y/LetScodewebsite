import React from "react";
import Image from "next/image";
import SideDesign from "./SideDesign";
function HeroSection() {
  return (
    <>
      <section className="text-gray-600 bg-slate-200 pb-40 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The Home for Ambitious
              <br className="hidden lg:inline-block" />
              Engineers
            </h1>
            <p className="mb-8 leading-relaxed">
              We understand the importance of staying up-to-date with the
              ever-evolving technology landscape. Thats why we curate and
              provide comprehensive study materials on various tech topics,
              ranging from programming languages and web development to data
              science, artificial intelligence, and beyond.
              <br /> Educational guidance is primarily concerned with the
              students success in their educational career. We guide students to
              achieve their dream jobs by providing proper guidance and
              resources.
            </p>

            <div className="flex justify-center">
              <a href="/community">
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Get Started
                </button>
              </a>
            </div>
          </div>
          <div className=" relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              width={340}
              height={340}
              className="object-cover object-center rounded"
              alt="hero"
              src="/Image1.png"
            />
            <div className="absolute z-10 top-[16rem] left-[-0.5rem] md:top-[21rem] md:left-[-12rem]">
              <SideDesign />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
