import React from 'react';
import Image from 'next/image';

const CommunityCard = ({ img, title, description, link }: { img: string, title: string, description: string, link: string }) => {
  return (
    <div className="bg-gray-100 p-4 md:p-6 rounded-lg mx-auto w-full md:w-3/4 flex flex-col justify-center items-center">
      <div className="w-48 h-48 md:w-60 md:h-60 overflow-hidden flex flex-1 items-center justify-center rounded-lg mb-6">
        <Image width={150} height={150} src={img} alt="coding" className="object-cover object-center" />
      </div>
      <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4 text-center">{title}</h2>
      <p className="text-sm md:text-base leading-relaxed text-center">{description}</p>
      <a href={link} className="bg-green-500 mt-2 md:mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Join
      </a>
    </div>
  );
};

export default CommunityCard;
