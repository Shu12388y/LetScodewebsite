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
   <section>
    <h1 className='text-center font-bold text-4xl mt-10'>LGRP Services</h1>
    <div className='flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center'>
      <ServiceCard img="https://img.freepik.com/free-vector/version-control-concept-illustration_114360-3249.jpg?w=740&t=st=1707545445~exp=1707546045~hmac=6c9322e4df5440c4afcc8fb3419ccf718c13885ca1ded0b734e321d38f75dd0b" header='Github profile optimization' body='' link='https://forms.gle/U7H2mgzLfrEs2gFY9'/>
      <ServiceCard img="https://img.freepik.com/free-vector/flat-design-linkedin-mockup_23-2149217512.jpg?w=1060&t=st=1707545566~exp=1707546166~hmac=a4306a49a119667509c302ec8f537b6d7586709417e83e397eeda99018c57d30" header='Linkedin profile optimization' body='' link='https://forms.gle/zr5VCV3R12yxH6oT8'/>
      <ServiceCard img="https://img.freepik.com/free-vector/creative-gradient-portfolio-template_52683-79241.jpg?w=1060&t=st=1707545669~exp=1707546269~hmac=4ac39d34c97afeb3ee8305eaf216e1ef8e44524610a86f56fe23b1e9f42cdb75" header='Portfolio websites' body='' link='https://forms.gle/tM5QF2CeVJSA12Qx8'/>
      <ServiceCard img="https://img.freepik.com/free-vector/choice-worker-concept_52683-44075.jpg?w=1060&t=st=1707545713~exp=1707546313~hmac=6451e406cd61d9ea547bc38bd2773eb48c8cd84b13af0b0b80146bae23a344c1" header='Resume review' body='' link='https://forms.gle/VQDYdXafpbFfDZqf6'/>

    </div>
   </section>
<section>
  <h1 className='text-4xl font-bold text-center mt-20'>Premium jobs</h1>
  <div className="flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center">
    <ServiceCard header='Jobs for 2026 Batch' link='https://forms.gle/fQnZJFPAwhBsFrMVA
' img='https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1707567783~exp=1707568383~hmac=d3f07c66e6b583066718af12fd516d1255af896e5f7dee735ffa4e819cdd5085' body=''/>
  <ServiceCard header='Jobs for 2025 Batch' link='https://forms.gle/fQnZJFPAwhBsFrMVA
' img='https://img.freepik.com/free-vector/tiny-friendly-persons-planting-trees-earth-together-planet-protection-sustainable-agriculture-flat-vector-illustration-reforestation-environment-ecology-teamwork-concept-banner_74855-20995.jpg?size=626&ext=jpg' body=''/>
  <ServiceCard header='Jobs for 2024 Batch' link='https://forms.gle/fQnZJFPAwhBsFrMVA
' img='https://img.freepik.com/free-vector/friends-video-calling_52683-37084.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais' body=''/>

  </div>
  <div className="flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center">
    <ServiceCard header='Jobs for 2023 Batch' link='https://forms.gle/fQnZJFPAwhBsFrMVA
' img='https://img.freepik.com/free-vector/people-waiting-job-interview_23-2148616408.jpg?w=1060&t=st=1707567877~exp=1707568477~hmac=5c67f6bb57509b78e1257591e6916c7e321c9a0ae1cb689f8636e3df08121890' body=''/>
  <ServiceCard header='Jobs for 2022 Batch' link='https://forms.gle/fQnZJFPAwhBsFrMVA
' img='https://img.freepik.com/premium-vector/business-people-working-flat-illustration-can-be-use-web-page-design-templates-meeting-online_181182-8480.jpg?size=626&ext=jpg' body=''/>
  <ServiceCard header='Jobs for 2021 Batch' link='https://forms.gle/fQnZJFPAwhBsFrMVA
' img='https://img.freepik.com/free-vector/artists-painting-abstract-picture-with-paintbrush-oil-paint-work-tiny-persons-drawing-with-digital-tools-flat-vector-illustration-virtual-master-class-online-workshop-creation-concept_74855-21648.jpg?size=626&ext=jpg' body=''/>

  </div>
</section>
<section>
  <h1 className='text-center font-bold text-4xl mt-20'>Technology Based Jobs</h1>
  <div className='flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center'>
<ServiceCard img='https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais' header='React Js Jobs' body='' link='https://forms.gle/PRq8NyEA8wS3oy8w7'/>
<ServiceCard img='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph' header='Java Jobs' body='' link='https://forms.gle/PRq8NyEA8wS3oy8w7'/>
<ServiceCard img='https://img.freepik.com/free-photo/data-analysis-results-summary-graph-chart-word-graphic_53876-133686.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais' header='Data Analyst Jobs' body='' link='https://forms.gle/PRq8NyEA8wS3oy8w7'/>

  </div>
</section>
<section>
  <h1 className='text-center font-bold text-4xl mt-20'> Remote Jobs</h1>
  <div className='flex flex-col items-center justify-center mt-10 gap-3 mb-10 md:flex-row md:flex-wrap md:justify-center'>
<ServiceCard  img='https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4415.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais' header='Remote Intership' body='' link='https://forms.gle/Td9QD6rdAR1DLE6eA'/>
<ServiceCard  img='https://img.freepik.com/free-vector/flat-hand-drawn-friends-videoconferencing-scenes_23-2148852457.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais' header='Remote Jobs' body='' link='https://forms.gle/Td9QD6rdAR1DLE6eA'/>

  </div>
</section>
    </>
  )
}

export default page