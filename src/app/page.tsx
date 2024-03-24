"use client";

import { lazy } from "react";

const HeroSection = lazy(() => import("../components/component/HeroSection"));
const Figure = lazy(() => import("../components/component/Figure"));
const Feature = lazy(() => import("../components/component/Feature"));
const Card = lazy(() => import("../components/component/TestCard"));

export default function Home() {
  return (
    <>
      <section className="bg-slate-200 px-10 overflow-hidden">
        <HeroSection />
      </section>
      <section className="flex flex-1 bg-green-100 justify-center">
        <Figure />
      </section>
      <section className="bg-green-100 flex flex-1 justify-center">
        <Feature />
      </section>
      <section className="bg-green-100 flex flex-1 justify-center">
        <Card />
      </section>
    </>
  );
}
