import React, { lazy } from "react";
const AboutHeroSection = lazy(() => import("./AboutHeroSection"));
const JoinTeam = lazy(() => import("./JoinTeam"));
// const Team = lazy(() => import("./Team"));

function page() {
  return (
    <>
      <section className="bg-slate-200 px-10">
        <AboutHeroSection />

        <JoinTeam />
      </section>
    </>
  );
}

export default page;
