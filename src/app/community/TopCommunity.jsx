"use client";
import React, { useState } from 'react';
import CommunityCard from './CommunityCard';

const TopCommunity = () => {
  const initialCards = [
    {
       img :"https://img.freepik.com/free-vector/operating-system-concept-illustration_114360-2195.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais",
      title: "Open Source",
      description: "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all things open source. 🤝 Whether you're a seasoned open source contributor or just starting your journey, this group is the perfect platform to connect, collaborate, and learn together. 📚💡",
      link:"https://chat.whatsapp.com/ELpn6eu6b1A0lPXZ9Fr8nO",
    },
    {
        img: "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=900&t=st=1707200798~exp=1707201398~hmac=0eab2c59a17f521fdfab96055ec2736e63e9883b4a57ac6ec05ec2753828d386",
      title: "Ai/Ml",
      description: "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all things Artificial Intelligence and Machine Learning. 🤝 Whether you're a seasoned AI expert or just getting started in the world of ML, this group is the perfect platform to connect, collaborate, and learn together. 📚💡.",
      link:"https://chat.whatsapp.com/HTDJ0DN54xj6RlyEb1sDUG",
    },
    
    {
        img: "https://img.freepik.com/free-vector/analyst-working-laptop-with-automation-process-business-process-automation-business-process-workflow-automated-business-system-concept_335657-400.jpg?w=1060&t=st=1707200884~exp=1707201484~hmac=afa3b40e1226420e49a6d526c2f94bb16e37542184e147812f98ba36724409fb",
        title: "Data Structure and Algorithm",
        description: "We are excited to announce the launch of our dedicated community focused on all things DSA. Whether you're a seasoned coder or just beginning your coding journey, this community is the perfect platform to explore, learn, and excel in the world of algorithms and problem-solving.",
        link:"https://chat.whatsapp.com/DDA9Vix2xb86lPHvr4GK8L"
      },
      {
        img: "https://img.freepik.com/free-vector/man-sysadmine-computer-programmer-working-computer_575670-70.jpg?w=900&t=st=1707227144~exp=1707227744~hmac=bcd57ef149ef0bef169bb4ce2004149d96fbb833331a657ad4202b5fd26e8ac0",
        title: "Full Stack Development",
        description: "We are excited to announce the launch of our dedicated community focused on all things Full Stack Development. Whether you're a seasoned developer or just beginning your developer coding journey, this community is the perfect platform to explore, learn, and connect , colloborate and learn together. 💻💡 ..",
        link:"https://chat.whatsapp.com/J2V4N5d4I8MKpPlEsdEN0A"
    },
      {
        img: "https://img.freepik.com/free-vector/data-points-concept-illustration_114360-4070.jpg?w=740&t=st=1707227285~exp=1707227885~hmac=eaa40066c62ab22c6c057e4dbd7da0d8680f82b37ca8d20900cc29ebdf40384f",
        title: "Data Science",
        description: "We are excited to announce the launch of our dedicated community focused on all things Data science. Whether you're a Data science expert or just beginning your Data science, this community is the perfect platform to explore, learn, and connect , colloborate and learn together. 💻💡. 💻💡..",
        link:"https://chat.whatsapp.com/KCW6HycyQd2KoAYlC7Obsx"
      },
      
      {
        "img": "https://img.freepik.com/free-photo/hologram-projector-screen-with-cloud-system-technology_53876-108502.jpg?w=1060&t=st=1707227632~exp=1707228232~hmac=ef81d5f8b0b39dcb2ce18eba0a086da758e2188f77a63b52b6eb363ddd1c9aca",
        title: "Cloud Computing",
        description: "We are excited to announce the launch of our dedicated community focused on all things Cloud Computing. Whether you're a Cloud expert or just beginning your Cloud journey, this community is the perfect platform to explore, learn, and connect , colloborate and learn together. 💻💡. 💻💡 ..",
        link:"https://chat.whatsapp.com/FKDHUWJPjEyCoG0VLKRbEZ",
    },
      {
        "img": "http://localhost:3000/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fflat-design-ui-ux-background-illustrated_23-2149054879.jpg%3Fw%3D996%26t%3Dst%3D1707328974~exp%3D1707329574~hmac%3D82e751a4660299845ac790295e99779cd85e5988f14dcdc7aa9c53a44d4f0128&w=640&q=75",
        title: "Cyber security",
        description: "We are excited to announce the launch of our dedicated community focused on all things Cyber Security. Whether you're a cyber security expert or just beginning your cyber security journey, this community is the perfect platform to explore, learn, and connect , colloborate and learn together. 💻💡. 💻💡 ..",
        link:"https://chat.whatsapp.com/Cgi0isWfQ6VE3UnxUNjUzj",
      },
     
      {
        "img": "https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-11697.jpg?w=996&t=st=1707328799~exp=1707329399~hmac=a53efb70cacfb75f0e42b738ce0a3d9b8a945e5ae6f4969cc8b453731e8756f8",
        title: "UI/Ux",
        description: "We are excited to announce the launch of our dedicated community focused on all things UI/UX. Whether you're a seasoned coder or just beginning your UI/UX journey, this community is the perfect platform to explore, learn, and excel in the world of design and prototyping. 💻💡 ..",
        link:"https://chat.whatsapp.com/JkWB7jWxfkZ1rsuPA1C1Q2"
    },
      {
        "img": "https://img.freepik.com/free-vector/flat-design-ui-ux-background-illustrated_23-2149054879.jpg?w=996&t=st=1707328974~exp=1707329574~hmac=82e751a4660299845ac790295e99779cd85e5988f14dcdc7aa9c53a44d4f0128",
        title: "Android, flutter & IOS",
        description: "We are excited to announce the launch of our dedicated community focused on all things app development. Whether you're a seasoned coder or just beginning your coding journey, this community is the perfect platform to explore, learn, and excel in the world of app development. 💻💡 .",
        link:"https://chat.whatsapp.com/D2aBrECay5k4O1WZLojus2"
    
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
    <div className="container mx-auto " style={{ backgroundColor: '#D2F3D4' }}>
      <section className="text-gray-600 body-font" style={{ backgroundColor: "#DEE1E6" }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 justify-center">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-3xl mb-2 text-center text-gray-600 font-bold">Top Community</h1>
             
              <hr className="bg-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <CommunityCard key={index} img={card.img} title={card.title} description={card.description}
              link={card.link} />
              
            ))}
            
            
          </div>
          

          {!showAllCards && (
            <button onClick={handleViewAll} className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none">View All</button>
          )}

          {showAllCards && (
            <button onClick={handleReset} className="flex mx-auto mt-8 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none">Reset</button>
          )}
        </div>
      </section>
    </div>
  );
};

export default TopCommunity;
