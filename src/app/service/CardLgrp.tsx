import React from 'react';
import Image from 'next/image';

const CardLgrp = ({ img, title, description }: { img: string, title: string, description: string }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full md:w-2/4 lg:w-1/4 flex flex-col justify-center items-center">
      <Image
        height={400}
        width={400}
        src={img}
        alt="coding"
        className="w-full h-50 object-cover object-center mb-6 rounded-lg"
      />
      <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">{title}</h2>
      <p className="text-base leading-relaxed text-center">{description}</p>
    </div>
  );
};

export default CardLgrp;
