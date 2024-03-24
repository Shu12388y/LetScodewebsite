import React from "react";
import Image from "next/image";

function JoinTeam() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4 py-16 md:flex-row">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold md:text-base">
            Join our team &rarr;
          </p>
          <p className="text-3xl font-bold md:text-4xl">
            We&apos;re just getting started
          </p>
          <p className="text-base text-gray-600 md:text-lg">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Coming Soon
          </button>
        </div>
        <div className="mt-10 w-full md:w-auto">
          <Image
            width={500}
            height={500}
            src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Getting Started"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default JoinTeam;
