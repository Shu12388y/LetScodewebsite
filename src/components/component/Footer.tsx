import React from 'react'
import image from "@/app/logo1.png";
import Image from 'next/image';

export function FooterFour() {
  return (
    <section className="relative overflow-hidden py-10" style={{ backgroundColor: '#FAFAFBFF' }}>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
              <Image loading='eager' width="70" height="70" src={image.src} alt="" />
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
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/contact">
                    Contact Us
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
                Service
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="https://docs.google.com/forms/d/e/1FAIpQLSctymwOtXIzeC_GUUzj2oM_u0iGh69cJkws8RGrZRRliuZRsw/viewform">
                    Premium Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="https://docs.google.com/forms/d/e/1FAIpQLSfd_u1h1Z74mb3-zEfYLG4bVc4lQSvDDDZbp3NzkqDM52b9cw/viewform">
                    Remote Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="https://docs.google.com/forms/d/e/1FAIpQLSe8NFOal_SkKGpIsklqDOAdg5-NJWaaUw4WYlUhXuWdwiSq8Q/viewform">
                    Tech Jobs
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/service">
                    Lgrp
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
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="">
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
