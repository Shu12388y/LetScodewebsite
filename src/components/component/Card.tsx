import React from 'react'


export function CardTwo({img,header,body}:{img: string, header: string, body: string}) {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={img}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{header}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {body}
        </p>
      </div>
    </div>
  )
}
