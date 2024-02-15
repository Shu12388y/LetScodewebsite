"use client";
import React from "react";
import { useForm} from "@formspree/react";
import Image from "next/image";
import Design from '../../../public/design.gif';


function ContactPageOne() {
  const [state, handleSubmit] = useForm("moqyrweq");
  if (state.succeeded) {
    return <p className="flex flex-1 items-center justify-center mt-60 font-bold text-4xl mb-60" >Thanks for joining!</p>;
  }
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4" style={{ backgroundColor: '#D2F3D4' }}>
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm " style={{color:"#9095A0"}}>
             Questions? Feedback? Need Career Advice?

            </p>
          </div>
          <p className="text-center text-3xl font-bold md:text-5xl md:leading-10" style={{color:"#323842"}}>
          Just want to chat?
          </p>
          <p className="mx-auto max-w-4xl text-center text-base md:text-xl leading-6" style={{color:"#666666"}}>
          As the top career community for engineers worldwide, we are obsessed with providing exceptional support. 
          Whether you need guidance advancing your career, help with your profile, or want to share suggestions, we have  got your back.
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24" >
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2 rounded-lg" style={{ backgroundColor: '#FAFAFB' }}>
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12 rounded-lg">
                <p className="text-2xl font-bold text-gray-700 md:text-4xl">
                  Get in touch
                </p>
                <p className="mt-4 text-lg text-gray-500">
                Our team of specialists is standing by to offer timely, individualized assistance for anything you need. Because your career success is our #1 priority.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        placeholder="First Name"
                        id="firstname"
                        type="text"
                        name="firstname"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        id="lastname"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="phone_number"
                      type="tel"
                      name="tel"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      name="message"
                      placeholder="Leave us a message"
                      cols={3}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-green-500 shadow-sm border border-green-500 hover:bg-green-500 hover:text-white hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <Image
             layout='responsive'
             loading='eager'
              width="1100"
              height="1500"
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block "
              src={Design}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPageOne;
