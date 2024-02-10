import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



export const ProductOverviewTwo = ({img,header,subheader,body,link}:{img:string,subheader:string,header:string,body:string,link:string}) => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <Image
          width={500}
          height={500}
            alt="image"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={img}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">{header}</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">{subheader}</h1>
            <p className="leading-relaxed">
            {body}
            </p>
            <Link href={link} className='mt-5 flex flex-1 items-center '>
            <button
        type="button"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Coming Soon
      </button>

            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
