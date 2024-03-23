"use client";
import React, { useState } from "react";
import JobCard from "./JobCard";

const JobFlex = () => {
  const initialCards = [
    {
      img: "https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?size=626&ext=jpg&ga=GA1.1.570712340.1707328262&semt=sph",
      title: "Jobs for 2026 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },
    {
      img: "https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?size=626&ext=jpg&ga=GA1.1.570712340.1707328262&semt=sph",
      title: "Jobs for 2025 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },

    {
      img: "https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?size=626&ext=jpg&ga=GA1.1.570712340.1707328262&semt=sph",
      title: "Jobs for 2024 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },
    {
      img: "https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?size=626&ext=jpg&ga=GA1.1.570712340.1707328262&semt=sph",
      title: "Jobs for 2023 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },
    {
      img: "https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?size=626&ext=jpg&ga=GA1.1.570712340.1707328262&semt=sph",
      title: "Jobs for 2022 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },
    {
      img: "https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?size=626&ext=jpg&ga=GA1.1.570712340.1707328262&semt=sph",
      title: "Jobs for 2021 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },

    // Add more initial cards as needed
  ];

  const [showAllCards, setShowAllCards] = useState(false);
  const [cards, setCards] = useState(initialCards.slice(0, 3)); // Initially show only three cards

  const handleViewAll = () => {
    setShowAllCards(true);
    setCards(initialCards); // Show all cards when View All is clicked
  };

  const handleReset = () => {
    setShowAllCards(false);
    setCards(initialCards.slice(0, 3)); // Reset to show only three cards
  };

  return (
    <div className="container mx-auto bg-white  shadow-xl p-8 rounded-md">
      <section
        className="text-gray-600 body-font"
        style={{ backgroundColor: "#D2F3D4" }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 justify-center">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-3xl mb-2 text-center text-black font-bold">
                Browse Job Category
              </h1>
              <p className="text-center mt-6 text-gray-600">
                The Best Engineering Roles at the Best Companies
              </p>
              <p className="text-center text-gray-600">
                Premier jobs to grow your skills and progress your career
                journey
              </p>
              <hr className="bg-gray-500" />
            </div>
          </div>

          <div className="grid grid-rows-1 gap-4 md:grid-cols-3">
            {cards.map(
              (card:{
                img:string,
                title:string,
                link:string,
              },index:number
              ) => (
                <JobCard
                  key={index}
                  img={card?.img}
                  title={card?.title}
                  // description={card?.description}
                  link={card?.link}
                />
              )
            )}
          </div>

          {!showAllCards && (
            <button
              onClick={handleViewAll}
              className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none"
            >
              View All
            </button>
          )}

          {showAllCards && (
            <button
              onClick={handleReset}
              className="flex mx-auto mt-8 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none"
            >
              Reset
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobFlex;
