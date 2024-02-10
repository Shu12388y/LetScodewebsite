import React from 'react'
import Image from 'next/image'


export function CardTwo({img,header,body}:{img: string, header: string, body: string}) {
  return (
    <div className="w-[300px] rounded-md border hover:bg-slate-100 shadow-lg hover:shadow-indigo-500/40 ">
      <Image
      width="400"
      height="400"
        src={img}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{header}</h1>
        <p className="mt-3 text-sm text-gray-800">
          {body}
        </p>
      </div>
    </div>
  )
}
