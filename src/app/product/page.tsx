import React from 'react'
import {ProductOverviewTwo} from "@/components/component/Product";
function page() {
  return (
    <>
    <section className='bg-slate-50 py-20'>
      <h1 className='text-center font-bold text-4xl mt-10'>Our SAAS Products</h1>
      <div className='flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-center'>
      <ProductOverviewTwo header='Scam updates everyday' img='https://img.freepik.com/free-vector/online-scam-alert-background-internet-security-safety_1017-44292.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais' subheader='Scam Website' body='scam site a scam updaing website which help you update yourself with alteast cyber crime ' link='' status='coming soon'/>
      <ProductOverviewTwo header='Remote Job' img='https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/11/17071852/remote_job.png' subheader='Lets Remote ' body='Your next career move is just a click away.... ' link='https://letsremotejob.com/' status='Visit Now'/>
    
      </div>
    </section>
    </>
  )
}

export default page