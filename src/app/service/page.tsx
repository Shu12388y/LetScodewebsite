import React from "react";
import Hero from "./Hero";
import JobFlex from "./JobFlex";
import Lgrp from "./Lgrp";
import Cardflex from "./CardFlex";
import TechJobFlex from "./TechJobFlex";
function page() {
  return (
    <>
      <section className="overflow-hidden">
        <Hero />
        <JobFlex />
        <TechJobFlex />
        <Lgrp />
        <Cardflex />
      </section>
    </>
  );
}

export default page;
