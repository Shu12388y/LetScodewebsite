"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Shubham Paul",
    designation: "FullStack developer",
    image:
      "https://avatars.githubusercontent.com/u/91714143?v=4",
  },
  {
    id: 2,
    name: "Avinash Singh",
    designation: "Founder",
    image:
      "https://avatars.githubusercontent.com/u/61057666?v=4",
  },
  {
    id: 3,
    name: "KARAN RANA",
    designation: "FullStack Developer",
    image:
      "https://avatars.githubusercontent.com/u/103360966?v=4",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <>
    <h1 className="text-4xl flex flex-col items-center justify-center mb-10">Developer Team</h1>
    <div className="flex flex-eow items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </>
  );
}
