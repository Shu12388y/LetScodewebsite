import React from 'react';
import Image from 'next/image';

const LocationCard = ({ img, title, description, link }: { img: string, title: string, description: string, link: string }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mx-auto w-3/4 flex flex-col justify-center items-center">
      <Image height={500} width={500} src={img} alt="coding" className="w-full h-50 object-cover object-center mb-6 rounded-lg" />
      <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">{title}</h2>
      <p className="text-base leading-relaxed text-center">{description}</p>
      <a href={link} className="bg-green-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Join
      </a>
    </div>
  );
};

export default LocationCard;
