import React from 'react'
import image from "@/app/logo2.png";
import Image from 'next/image';

export function FooterFour() {
  return (
    <section className="relative overflow-hidden py-10" style={{ backgroundColor: '#FAFAFBFF' }}>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center w-20">
              <Image loading='eager' width="100" height="100" src={image.src} alt="" />
                <h2 className="ml-4 text-lg font-bold">Lets Code</h2>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2022. All Rights Reserved by Lets Code.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/service">
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/community">
                    Community
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/product">
                    Products
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/contact">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/contact">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/contact">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/terms">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/privacy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/license">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
