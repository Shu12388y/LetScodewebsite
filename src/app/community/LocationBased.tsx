"use client";

import React, { useState } from "react";
import LocationCard from "./LocationCard";

const LocationBased = () => {
  const initialCards = [
    {
      img: "https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?size=626&ext=jpg&ga=GA1.1.570712340.1707328262&semt=sph",
      title: "Bangalore Community",
      description:
        "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all banglore software enginner's 🤝.",
      link: "https://chat.whatsapp.com/I5J6leKJSGaI2BNqoyXp6V",
    },
    {
      img: "https://img.freepik.com/free-vector/hyderabad-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-web-site_596401-155.jpg?w=1060&t=st=1707329482~exp=1707330082~hmac=d4c037fabdb14478615f45e7c6f5b58d28d68415c56e34ee430414a1c74cec8a",
      title: "Hyderabad",
      description:
        "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all hyderbad software enginner's",
      link: "https://chat.whatsapp.com/JoWTazqp87mBleGTnI4Hgv",
    },

    {
      img: "https://img.freepik.com/free-vector/watercolor-painted-malaga-skyline_52683-71499.jpg?w=996&t=st=1707329624~exp=1707330224~hmac=63cc69c92e1306fed0670295e08ef3f858d93361f2a9eb3ac06fd6a55bc5e15c",
      title: "Pune",
      description:
        "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all pune software enginner's 🤝..",
      link: "https://chat.whatsapp.com/Kd4C1TH7n9JKjstYcaP77M",
    },
    {
      img: "https://img.freepik.com/free-vector/colorful-theme-landmarks-skyline_23-2148439830.jpg?w=996&t=st=1707329777~exp=1707330377~hmac=4d3c870b1d7ae436fbb548e59145849a06466acfc7c449abe1352455928f31b6",
      title: "NCR",
      description:
        "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all NCR software enginner's 🤝.",
      link: "https://chat.whatsapp.com/E4u2sEP4wEBBCfklaOyJ9B",
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
    <div className="container mx-auto">
      <section
        className="text-gray-600 body-font"
        style={{ backgroundColor: "#D2F3D4" }}
      >
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10 justify-center">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-3xl mb-2 text-center text-gray-600 font-bold">
                Location Based Community
              </h1>
              <hr className="bg-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <LocationCard
                key={index}
                img={card?.img}
                title={card?.title}
                description={card?.description}
                link={card?.link}
              />
            ))}
          </div>

          {!showAllCards && (
            <button
              onClick={handleViewAll}
              className="flex mx-auto mt-12 sm:mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none"
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

export default LocationBased;
