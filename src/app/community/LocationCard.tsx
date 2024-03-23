import React from 'react';
import Image from 'next/image';

const LocationCard = ({ img, title, description, link }: { img: string, title: string, description: string, link: string }) => {
  return (
    <div className="bg-gray-100 p-4 md:p-6 rounded-lg mx-auto w-full md:w-3/4 flex flex-col justify-center items-center">
      <Image height={300} width={300} src={img} alt="coding" className="w-full h-48 md:h-60 object-cover object-center mb-4 rounded-lg" />
      <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4 text-center">{title}</h2>
      <p className="text-sm md:text-base leading-relaxed text-center">{description}</p>
      <a href={link} className="bg-green-500 mt-2 md:mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Join
      </a>
    </div>
  );
};

export default LocationCard;
