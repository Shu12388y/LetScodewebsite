import React from 'react';
import Image from 'next/image';

const CardLgrp = ({ img, title, description,link }: { img: string, title: string, description: string,link:string }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full flex flex-col justify-center items-center">
      <Image
        height={400}
        width={400}
        src={img}
        alt="coding"
        className="w-full h-50 object-cover object-center mb-6 rounded-lg"
      />
      <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">{title}</h2>
      <p className="text-base leading-relaxed text-center">{description}</p>
      <a href={link}><button className='bg-green-400 p-3 rounded-2xl text-black font-bold mt-4'>Join Now</button></a>
    </div>
  );
};

export default CardLgrp;
