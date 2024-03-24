import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";
function Feature() {
  return (
    <>
      <section className="text-gray-600 p-10 bg-slate-200 body-font">
        <button className="bg-white ml-6 text-green-400  text-2xl p-2 rounded-full">
          All in one Place
        </button>
        <div className="container px-5 py-18 mx-auto">
          <div className="flex flex-row items-center justify-between  w-full mb-2">
            <h1 className=" text-black  text-6xl p-2  mt-3  ">Features</h1>
          </div>
          <p className="lg:w-2/3 text-lg mx-auto  leading-relaxed ">
            Discover premium jobs, accelerate your career through LGRP, avoid
            scams, connect and get mentored by engineers, and access resources
            to maximize your potential.
          </p>
          <div className="grid md:grid-cols-2 grid-rows-1 gap-10 justify-items-center mt-3">
            <div className="p-2 w-full">
              <div className="h-full flex items-center bg-green-300  border-gray-200 border p-4 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/internship.png"
                />
                <div className="flex-grow  ">
                  <h2 className="text-gray-900 title-font font-medium">
                    Internship &Jobs
                  </h2>
                  <p className="text-gray-500">
                    Discover your dream career with top jobs from leading
                    companies.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="h-full flex items-center bg-green-300  border-gray-200 border p-4 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/setting.png"
                />
                <div className="flex-grow  ">
                  <h2 className="text-gray-900 title-font font-medium">LGRP</h2>
                  <p className="text-gray-500">
                    Fast track your engineering career through our advanced
                    development program.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="h-full flex items-center bg-green-300  border-gray-200 border p-4 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/blog.png"
                />
                <div className="flex-grow  ">
                  <h2 className="text-gray-900 title-font font-medium">
                    Blog & Resources
                  </h2>
                  <p className="text-gray-500">
                    Unlock your potential with our ever-expanding resources hub
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="h-full flex items-center bg-green-300  border-gray-200 border p-4 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/career.png"
                />
                <div className="flex-grow  ">
                  <h2 className="text-gray-900 title-font font-medium">
                    Career Guidance
                  </h2>
                  <p className="text-gray-500">
                    Let our experts guide you to career success every step of
                    the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="/service">
          <button className="block mx-auto bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
            Get Started
          </button>
        </a>
      </section>
    </>
  );
}

export default Feature;
