"use client";

import { HeroParallaxDemo } from "@/components/component/HeroSection";
import { BentoGridThirdDemo } from "@/components/component/Content";
import { TypewriterEffectDemo } from "@/components/component/NewLetter";
import { SVGMaskEffectDemo } from "@/components/component/Mask";
import { CardTwo } from "@/components/component/Card";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import Image from "next/image";


export default function Home() {
  useEffect(() => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Image
              width="300"
              height="300"
                className="h-10 w-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/61057666?v=4"
                alt="img"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Avinash Singh</p>
              <p className="mt-1 text-sm text-gray-500">
                Welcome to our website! We are thrilled to have you here.
                Explore, enjoy, and make yourself at home. Thanks for visiting
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  }, []);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="bg-slate-50">
        <div>
          <HeroParallaxDemo />
        </div>
        <div className="mt-20">
          <h1 className="text-center font-bold text-4xl mb-20">
            What developers are saying ?
          </h1>
          <BentoGridThirdDemo />
        </div>
        <div className="flex justify-center flex-col px-20 py-10">
          <h1 className="mt-20 mb-20 text-center font-bold text-4xl">
            Achievements{" "}
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:justify-center">
            <CardTwo
              header="50k+ community"
              img="https://img.freepik.com/free-vector/hand-drawn-community-spirit-illustration_23-2150194851.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph"
              body="50k+ community on Linkedin + Instagram + whatsapp and telegram."
            />
            <CardTwo
              header="Guiding 7k+ College students"
              img="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-3027.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph"
              body="Guiding 7k+ College students in their placements by providing regular opportunity updates and free placement resources."
            />
            <CardTwo
              header="10 + tech groups"
              img="https://img.freepik.com/free-vector/flat-world-population-day-background-with-planet-people_23-2149427306.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph"
              body="10 + tech groups Like DSA , Full stack , Cloud ,AI/Ml,Open source , where we solve doubts of group members and share helpful resources."
            />
            <CardTwo
              header="Building products"
              img="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-4240.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph"
              body="Building products to solve real world problems ( Scam alert - work in progress) or you can add in your language)"
            />
          </div>
        </div>
        <div className="mt-10">
          <SVGMaskEffectDemo />
        </div>
        <div className="mt-6">
          <TypewriterEffectDemo />
        </div>
      </div>
    </>
  );
}
