import React from "react";
import Image from "next/image";
function Feature() {
  return (
    <>
      <section className="text-gray-600 p-10 bg-slate-200 body-font">
        <button className="bg-white text-green-400  p-2 rounded-full">
            All in one Place
        </button>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-row items-center justify-between  w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
              Features
            </h1>
           
            <button className="bg-green-500 font-bold text-black rounded-full w-[10rem] p-2">Get Started</button>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos;t heard of them.
            </p>
          <div className="grid md:grid-cols-2 grid-rows-1 gap-10 justify-items-center">
            <div className="p-2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                width={500}
                height={500}
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2  w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                width={500}
                height={500}
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                width={500}
                height={500}
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2  w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                width={500}
                height={500}
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
