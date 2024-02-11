'use client'

import React from 'react'
import { CardTwo } from "@/components/component/Card";
import Image from 'next/image';



export function AboutPageOne() {

  return (
    <div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          As the Lets Code community, our unwavering mission is to empower and support every job seeker and tech enthusiast on their journey towards success. We strive to be a beacon of knowledge, sharing regular updates, opportunities, and resources that will elevate their skills and careers.
          </p>
        </div>
        {/* <div className="w-full space-y-2 h-[300px] ">
          <Image width="10000" height="10000" loading='eager'
            className="h-[100px] w-full rounded-xl object-scale-down  md:h-full"
            src="https://img.freepik.com/free-vector/hand-drawn-community-spirit-illustration_23-2150194851.jpg?w=1060&t=st=1707661870~exp=1707662470~hmac=2762e2975fbaef4e98e53a5fcb069aab262b5b9161d70320827dc116932c58f0"
            alt="img"
          />
        </div> */}
        <div className="flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center">
        <CardTwo
          img="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?w=826&t=st=1707142657~exp=1707143257~hmac=cdebf65223a94131146aa14ca0ba33ca0eefc36dd2c967d6d53f37e971ea1aa1"
          header="Mission"
          body="Our inclusive and collaborative platform fosters a community where
          everyone can freely exchange insights seek guidance and grow together"
        />
        <CardTwo
          img="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7576.jpg?w=740&t=st=1707143102~exp=1707143702~hmac=d8f1fa23840a5a6b3267c78c0c1867fe39d83f8c2df83206fe16dfeac5c9d8d4"
          header="Vision"
          body="   We envision Let's Code as a guiding light, illuminating the path for
          aspiring developers and tech enthusiasts, igniting their passion for
          coding, and nurturing their talents to unlock their true potential."
        />
        <CardTwo
          img="https://img.freepik.com/free-vector/target-achievement-teamwork-business_107791-46.jpg?1&w=826&t=st=1707143170~exp=1707143770~hmac=95ccc8c341cf696470a640d7fbd95114ad21fa127490c262a323875d57c6abf3"
          header="Goal"
          body="     As we embark on our mission to empower job seekers and tech
          enthusiasts through Let's Code, our overarching goal is to reach and
          positively impact a diverse community."
        />
        <CardTwo
          img="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?w=1060&t=st=1707143337~exp=1707143937~hmac=c750a5a8c2849cf0e36121e9d9936ae46928b7772c29d29666bf72e13fe56164"
          header="Our Works"
          body="We share resource and opportunity updates in our community. We have
          tech communities like AI/ML, Cloud, full-stack, etc., where we guide
          our community members to excel in their careers by providing proper
          guidance and resources!."
        />
      </div>
        
        <hr className="mt-20" />
       
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
            <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <Image width="1100" height="1100" loading='eager'
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
     
    </div>
  )
}
