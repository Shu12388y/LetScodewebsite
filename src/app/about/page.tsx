import React from "react";
import { AnimatedTooltipPreview } from "@/components/component/Developers";

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
      <div className="p-20">
        <h2 className="flex flex-1 items-center justify-center mb-10 text-2xl font-bold">
          About Us
        </h2>
        <div className="flex flex-row items-center justify-center">
          <img
            className="size-2/4"
            src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=1060&t=st=1707142313~exp=1707142913~hmac=3e87017fd9587e00cba5d3f3ee2bf70c6e776325a137c6ccf35837f1557f1638"
            alt=""
          />
          <p className="p-4">
            As the Let's Code community, our unwavering mission is to empower
            and support every job seeker and tech enthusiast on their journey
            towards success. We strive to be a beacon of knowledge, sharing
            regular updates, opportunities, and resources that will elevate
            their skills and careers. <br />
            We understand the importance of staying up-to-date with the
            ever-evolving technology landscape. That's why we curate and provide
            comprehensive study materials on various tech topics, ranging from
            programming languages and web development to data science,
            artificial intelligence, and beyond. Educational guidance is
            primarily concerned with the student's success in their educational
            career. <br />
            We guide students to achieve their dream jobs by providing proper
            guidance and resources. We also help students improve their resumes,
            LinkedIn profiles, and GitHub profiles. So don't wait, reach out to
            us for any help! .
          </p>
        </div>
      </div>
      <div className="flex item-center justify-center px-10">
        <div className="p-10">
          <img
            className=""
            src="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?w=826&t=st=1707142657~exp=1707143257~hmac=cdebf65223a94131146aa14ca0ba33ca0eefc36dd2c967d6d53f37e971ea1aa1"
            alt=""
          />
          <h1 className="flex flex-1 items-center justify-center pb-2 font-bold">
            Mission
          </h1>
          Our inclusive and collaborative platform fosters a community where
          everyone can freely exchange insights, seek guidance, and grow
          together..
        </div>
        <div className="p-10">
          <img
            className="size-fit"
            src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7576.jpg?w=740&t=st=1707143102~exp=1707143702~hmac=d8f1fa23840a5a6b3267c78c0c1867fe39d83f8c2df83206fe16dfeac5c9d8d4"
            alt=""
          />
          <h1 className="flex flex-1 items-center justify-center pb-2 font-bold">
            Vision
          </h1>
          We envision Let's Code as a guiding light, illuminating the path for
          aspiring developers and tech enthusiasts, igniting their passion for
          coding, and nurturing their talents to unlock their true potential..
        </div>
        <div className="p-10">
          <img
            src="https://img.freepik.com/free-vector/target-achievement-teamwork-business_107791-46.jpg?1&w=826&t=st=1707143170~exp=1707143770~hmac=95ccc8c341cf696470a640d7fbd95114ad21fa127490c262a323875d57c6abf3"
            alt=""
          />
          <h1 className="flex flex-1 items-center justify-center pb-2 font-bold">
            Goal
          </h1>
          As we embark on our mission to empower job seekers and tech
          enthusiasts through Let's Code, our overarching goal is to reach and
          positively impact a diverse community.
        </div>
        <div className="p-10">
          <img
            src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?w=1060&t=st=1707143337~exp=1707143937~hmac=c750a5a8c2849cf0e36121e9d9936ae46928b7772c29d29666bf72e13fe56164"
            alt=""
          />
          <h1 className="flex flex-1 items-center justify-center pb-2 font-bold">
            Our Works
          </h1>
          "We share resource and opportunity updates in our community. We have
          tech communities like AI/ML, Cloud, full-stack, etc., where we guide
          our community members to excel in their careers by providing proper
          guidance and resources!.
        </div>
      </div>
      <div>
        <AnimatedTooltipPreview />
      </div>
    </>
  );
}

export default page;
