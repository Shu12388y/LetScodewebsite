import React from 'react';

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font" style={{ backgroundColor: "#DEE1E6" }}>
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <button className="flex mx-auto mt-5 text-gray-500 bg-white rounded-lg border-0 py-1 px-2 text-xl md:text-2xl">
              Lets Learn Together, Grow Together
            </button>
            <h1 className="mt-6 font-bold text-4xl md:text-5xl title-font mb-4 text-gray-900">
              Loved by <span className="text-red-500">40,0000 +</span> Engineers <br />
              <span className="text-green-600 md:mt-7">around the India</span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg">
              Be a part of the most exclusive <br />
              community of India
            </p>
          </div>
          <button className="flex mx-auto mt-12 md:mt-16 text-green-500 bg-white border-2 border-green-600 outline-2 py-2 px-8 rounded-lg">
            Become a member
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
