"use client";
import React, { useState } from "react";
import JobCard from "./JobCard";

const JobFlex = () => {
  const initialCards = [
    {
      img: "https://img.freepik.com/free-vector/man-taking-break-from-work_23-2148508516.jpg?size=626&ext=jpg&ga=GA1.1.387971878.1711206636&semt=ais",
      title: "Jobs for 2026 Batch",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },
    {
      img: "https://img.freepik.com/free-vector/designer-concept-illustration_114360-686.jpg?size=626&ext=jpg&ga=GA1.1.387971878.1711206636&semt=ais",
      title: "Jobs for 2025 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },

    {
      img: "https://img.freepik.com/free-vector/design-process-concept-landing-page_23-2150174167.jpg?size=626&ext=jpg&ga=GA1.1.387971878.1711206636&semt=ais",
      title: "Jobs for 2024 Batch",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },
    {
      img: "https://img.freepik.com/free-vector/design-process-concept-landing-page_23-2150174167.jpg?size=626&ext=jpg&ga=GA1.1.387971878.1711206636&semt=ais",
      title: "Jobs for 2023 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },
    {
      img: "https://img.freepik.com/free-vector/postponed-concept_52683-37087.jpg?size=626&ext=jpg&ga=GA1.1.387971878.1711206636&semt=ais",
      title: "Jobs for 2022 Batch",

      link: "https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform?usp=send_form",
    },
    {
      img: "https://img.freepik.com/free-vector/telecommuting-illustration_23-2148485189.jpg?size=626&ext=jpg&ga=GA1.1.387971878.1711206636&semt=ais",
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
                Specific Batch Wise Job Updates
              </h1>
              <p className="text-center mt-6 text-gray-600">
                Are you an IT professional or freshers looking for the latest
                job opportunities in the tech industry? Look no further! We have
                created a dedicated WhatsApp group that provides instant updates
                on IT job openings across various domains for specific batch
                pass out
              </p>
              <p className="text-center text-gray-600 font-bold">
                We have WhatsApp groups for batches -2026
                2025/2024/2023/2022/2021/2020/
              </p>
              <hr className="bg-gray-500" />
            </div>
          </div>

          <div className="grid grid-rows-1 gap-4 md:grid-cols-3">
            {cards.map(
              (
                card: {
                  img: string;
                  title: string;
                  link: string;
                },
                index: number
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
