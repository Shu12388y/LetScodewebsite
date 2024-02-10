import React from 'react'
import Image from 'next/image'


export function CardOne({img,header,body,link}:{img:string,header:string,body:string,link:string}) {
  return (
    <div className="w-[300px] rounded-md border shadow-lg hover:shadow-indigo-500/40">
      <Image
      width="100"
      height="100"
        src={img}
        alt="img"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg text-center font-semibold">{header}</h1>
        <p className="mt-3 text-l text-gray-600">
          {body}
        </p>
        <a href={link}>

        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
          Join
        </button>
            </a>
      </div>
    </div>
  )
}
