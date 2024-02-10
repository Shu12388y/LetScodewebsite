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
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
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
