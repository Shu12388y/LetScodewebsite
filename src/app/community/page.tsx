import React from "react";
import { CardOne } from "@/components/component/Card1";
import HeroSection from "./HeroSection";
import TopCommunity from "./TopCommunity";
import LocationBased from "./LocationBased";
function page() {
  return (
    <>
      <HeroSection />
      <TopCommunity />
      <LocationBased />
    </>
  );
}

export default page;
