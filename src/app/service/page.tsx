import React from "react";
import { ServiceCard } from "@/components/component/Services";
import { CardOne } from "@/components/component/Card1";
import Hero from "./Hero";
import JobFlex from "./JobFlex";
import Lgrp from "./Lgrp";
function page() {
  return (
    <>
      <Hero />
      <JobFlex />
      <Lgrp />
    </>
  );
}

export default page;
