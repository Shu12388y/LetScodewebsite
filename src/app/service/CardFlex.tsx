"use client"

import React, { useState } from 'react';
import CardLgrp from './CardLgrp';

const Cardflex = () => {
  const initialCards = [
    {
      img: "https://img.freepik.com/free-photo/people-holding-linkedin-icon-tablet_53876-71146.jpg?t=st=1711249060~exp=1711252660~hmac=97bb8baf4e74e228bdfe952a5e3aa9b7e65102208876b9aedb0972304db61fbb&w=740",
      title: "LinkedIn",
      description: "Looking to enhance your LinkedIn presence and unlock new opportunities? Look no further! Our LinkedIn profile optimization service is designed to maximize your visibility, credibility, and engagement on the world's premier professional networking platform.",
    },
    {
      img: "https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png",
      title: "Github",
      description: "Your GitHub profile is like your tech resume but cooler. It's where you can show off the awesome coding projects you've worked on, prove you know your stuff, and even demonstrate how well you play with others in the coding world. It's not just a bunch of code; it's a living, breathing showcase of what you can do. .",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqao4pTPPST5hORWImOWL4iht8JcW0Go-km_MnXO6FqA&s",
      title: "Resume Review",
      description: "Investing in our resume review service is a wise choice for anyone looking to optimize their job search and make a strong impression on hiring managers. Let us help you unlock your full potential and accelerate your career growth..",
    },
    {
      img: "https://img.freepik.com/free-vector/flat-design-portfolio-template-design_52683-80880.jpg?t=st=1711249161~exp=1711252761~hmac=538ba987dfb4f25a3ee57a563ce7b9dd531302652c4fcd8f2dcb90f2425712bc&w=740",
      title: "PortFolio",
      description: "A portfolio website is a unique way to showcase your work and let others know about yourself. It's like an evergreen platform for your projects, case studies, and information about you. .",
    }
    // Add more initial cards as needed
  ];

  const [showAllCards, setShowAllCards] = useState(false);
  const [cards, setCards] = useState(initialCards.slice(0, 4)); // Initially show only four cards

  const handleViewAll = () => {
    setShowAllCards(true);
    setCards(initialCards); // Show all cards when View All is clicked
  };

  const handleReset = () => {
    setShowAllCards(false);
    setCards(initialCards.slice(0, 4)); // Reset to show only four cards
  };

  return (
    <div className="container mx-auto" style={{ backgroundColor: '#D2F3D4' }}>
      <section className="text-gray-600 body-font" style={{ backgroundColor: "#DEE1E6" }}>
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-12 md:mb-20 justify-center">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-2xl md:text-3xl mb-2 text-center text-gray-600 font-bold">LGRP</h1>
              <hr className="bg-gray-500" />
            </div>
          </div>

          <div className="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <CardLgrp key={index} img={card.img} title={card.title} description={card.description} />
            ))}
          </div>

          {!showAllCards && (
            <button onClick={handleViewAll} className="flex mx-auto mt-10 md:mt-16 text-white bg-green-500 border-0 py-2 px-6 md:px-8 focus:outline-none">View All</button>
          )}

          {showAllCards && (
            <button onClick={handleReset} className="flex mx-auto mt-6 md:mt-8 text-white bg-red-500 border-0 py-2 px-6 md:px-8 focus:outline-none">Reset</button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cardflex;
