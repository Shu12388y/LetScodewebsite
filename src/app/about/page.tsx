import React from "react";
import { AnimatedTooltipPreview } from "@/components/component/Developers";
import { CardTwo } from "@/components/component/Card";
import {AboutPageOne} from "@/components/component/About";

function page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-4xl ">
        <div className="bg-cover bg-center">
          <img
            className="blur-sm"
            src="https://www.lets-code.co.in/images/banner/9.jpg"
            alt=""
          />
        </div>
        <h1 className="absolute text-4xl font-bold">About Company</h1>
      </div>
      <div>
        <AboutPageOne/>
      </div>
     
      <div className="mt-20 mb-20">
        <AnimatedTooltipPreview />
      </div>
    </>
  );
}

export default page;
