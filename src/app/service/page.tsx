import React from 'react'
import { ServiceCard } from '@/components/component/Services'
import { CardOne } from '@/components/component/Card1'
function page() {
  return (
    <>
    <section>
    <div className="flex flex-col items-center justifvy-center mt-20 mb-10">
        <div>
          <h1 className="text-4xl font-bold text-center">Build Your Own Community</h1>
          <div className="flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center">
            <CardOne img="https://img.freepik.com/free-vector/new-job-concept-illustration_114360-23770.jpg?w=740&t=st=1707384795~exp=1707385395~hmac=58b5c895a53f6b1fb9ef226bce8129307a9f4c6315a92e0f66580e066bac78b6" header="Job Updates for your Community" body="Coming Soon" link=""/>
            <CardOne img="https://img.freepik.com/free-photo/resume-apply-work-form-concept_53876-148017.jpg?w=740&t=st=1707384963~exp=1707385563~hmac=00a3355d9d6729180626ebe926ae6b7fda9b78ed150ce6fafb16f20e37ce38f0" header="Resume building Sessions" body="coming soon" link=""/>
            <CardOne img="https://img.freepik.com/free-photo/people-holding-linkedin-icon-tablet_53876-71146.jpg?w=740&t=st=1707385104~exp=1707385704~hmac=9c9c152518b007b66619404ec91e6eeac51e5b9a3da30415376cfbd3edbc69de" header="Linkedin Page growth" body="coming Soon" link=""/>
          <CardOne img="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?w=1060&t=st=1707385225~exp=1707385825~hmac=e542892174495b600ccf6f0c52fb1cdbd1e9e1466fdd3f22269fd32de4cdc717" header="Job Blog Website" body="Coming Soon" link=""/>
          <CardOne img="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-3027.jpg?w=740&t=st=1707385318~exp=1707385918~hmac=a74e62722445a0a1641adcaa23d8eb526a1e6f3a41cb27079b33269c43cdf3f0" header="Community Building from scratch " body="Coming Soon" link=""/>
          </div>
        </div>
       
      </div>
    </section>
   <section className='mt-10 mb-10 flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center'>
    <div className='flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center'>
      <ServiceCard img="https://img.freepik.com/free-vector/version-control-concept-illustration_114360-3249.jpg?w=740&t=st=1707545445~exp=1707546045~hmac=6c9322e4df5440c4afcc8fb3419ccf718c13885ca1ded0b734e321d38f75dd0b" header='GitHub Profile' body='' link=''/>
      <ServiceCard img="https://img.freepik.com/free-vector/flat-design-linkedin-mockup_23-2149217512.jpg?w=1060&t=st=1707545566~exp=1707546166~hmac=a4306a49a119667509c302ec8f537b6d7586709417e83e397eeda99018c57d30" header='Linklden' body='' link=''/>
      <ServiceCard img="https://img.freepik.com/free-vector/creative-gradient-portfolio-template_52683-79241.jpg?w=1060&t=st=1707545669~exp=1707546269~hmac=4ac39d34c97afeb3ee8305eaf216e1ef8e44524610a86f56fe23b1e9f42cdb75" header='Portfolio' body='' link=''/>
      <ServiceCard img="https://img.freepik.com/free-vector/choice-worker-concept_52683-44075.jpg?w=1060&t=st=1707545713~exp=1707546313~hmac=6451e406cd61d9ea547bc38bd2773eb48c8cd84b13af0b0b80146bae23a344c1" header='Resume' body='' link=''/>

    </div>
   </section>

    </>
  )
}

export default page