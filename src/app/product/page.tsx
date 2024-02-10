import React from 'react'
import {ProductOverviewTwo} from "@/components/component/Product";
function page() {
  return (
    <>
    <section>
      <h1 className='text-center font-bold text-4xl mt-20'>Our SAAS Products</h1>
      <div className='flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-center'>
      <ProductOverviewTwo header='Scam updates everyday' img='' subheader='Scam Website' body='scam site a scam updaing website which help you update yourself with alteast cyber crime ' link=''/>
      {/* <ProductOverviewTwo header='Scam updates everyday' img='' subheader='Scam Website' body='scam site a scam updaing website which help you update yourself with alteast cyber crime ' link=''/> */}
      {/* <ProductOverviewTwo header='Scam updates everyday' img='' subheader='Scam Website' body='scam site a scam updaing website which help you update yourself with alteast cyber crime ' link=''/> */}
    
      </div>
    </section>
    </>
  )
}

export default page