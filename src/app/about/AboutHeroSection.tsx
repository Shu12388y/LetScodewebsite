import React from "react";
import Image from "next/image";

function AboutHeroSection() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" text-lg mb-4  text-gray-900">
              At Let's Code , we are dedicated to empowering individuals in
              their tech journey by providing free study materials and job
              updates. Our mission is to make quality tech education accessible
              to everyone, regardless of their background or financial
              constraints.
              <br className="hidden lg:inline-block" />
              <p>
                <br />
                We understand the importance of staying up-to-date with the
                ever-evolving technology landscape. That's why we curate and
                provide comprehensive study materials on various tech topics,
                ranging from programming languages and web development to data
                science, artificial intelligence, and beyond.
              </p>
            </h1>
            <p className="text-lg mb-4  text-gray-900">
              <b>
                We also help students improve their resumes, LinkedIn profiles,
                and GitHub profiles. So don't wait, reach out to
                us for any help!
              </b>
            </p>
            {/* <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              width={500}
              height={500}
              className="object-cover object-center rounded w-full "
              alt="hero"
              src="https://img.freepik.com/free-vector/forming-team-leadership-concept-illustration_114360-13973.jpg?t=st=1711206658~exp=1711210258~hmac=9caea9dd5b61dd0eca6a7d450273369a75e23377cc1e81e292946d1170a8c391&w=1060"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHeroSection;
