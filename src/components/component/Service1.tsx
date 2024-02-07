'use client'

import React from 'react'
import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: ' Premium jobs Updates ',
    features: [
      'Access to all basic features ',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
    link:"https://forms.gle/fQnZJFPAwhBsFrMVA"
  },
  {
    name: 'Technology based job updates ',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB individual data each user',
      'Priority chat and email support',
    ],
    link:"https://forms.gle/PRq8NyEA8wS3oy8w7"
  },
  {
    name: 'Remote Jobs & Internships Updates',
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalized+priority service',
    ],
    link:"https://forms.gle/Td9QD6rdAR1DLE6eA"
  },
]

export function PricingPageOne1() {
 
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-4">
     
      <div>
        <div className="mt-8 w-full space-y-4 md:mt-12">
          <div className="grid space-y-8 lg:grid-cols-3 lg:space-x-8 lg:space-y-0">
            {plans.map((plan) => (
              <div key={plan.name} className=" rounded-2xl border  border-gray-200 bg-white shadow">
                <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
                  <div className="flex w-full flex-col items-start justify-start space-y-1">
                    <p className="w-full text-4xl font-semibold  text-gray-900">
                      {plan.name}
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start px-8 pb-10 pt-8">
                    <div className="flex w-full flex-col space-y-4">
                        {plan.features.map((feature) => (
                            <div key={feature} className="inline-flex w-full space-x-3">
                                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                                    <Check className="h-4 w-4" />
                                </div>
                                <p className="w-full text-base leading-normal text-gray-600">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full flex-col px-8 pb-8">
                  <div className="flex w-full flex-col items-start justify-start space-y-3">
                    <Link href={plan.link}>
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                      Get Started
                    </button>
                        </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
