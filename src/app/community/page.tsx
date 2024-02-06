import React from 'react';
import {CardOne} from "@/components/component/Card1";

function page() {
  return (
    <>
    <div className='flex flex-col items-center justifvy-center mt-20 mb-10'>
        <h1 className='text-4xl font-bold'>Our Community</h1>
    </div>
    <div className='flex flex-1 gap-10 items-center justify-center mt-20'>
        <CardOne img="https://img.freepik.com/free-vector/operating-system-concept-illustration_114360-2195.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais"  header="Open Source" body= "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all things open source. 🤝 Whether you're a seasoned open source contributor or just starting your journey, this group is the perfect platform to connect, collaborate, and learn together. 📚💡" link ="https://chat.whatsapp.com/ELpn6eu6b1A0lPXZ9Fr8nO" />
        <CardOne img="https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=900&t=st=1707200798~exp=1707201398~hmac=0eab2c59a17f521fdfab96055ec2736e63e9883b4a57ac6ec05ec2753828d386"  header="Ai/Ml" body= "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all things Artificial Intelligence and Machine Learning. 🤝 Whether you're a seasoned AI expert or just getting started in the world of ML, this group is the perfect platform to connect, collaborate, and learn together. 📚💡" link ="https://chat.whatsapp.com/HTDJ0DN54xj6RlyEb1sDUG" />
        <CardOne img="https://img.freepik.com/free-vector/analyst-working-laptop-with-automation-process-business-process-automation-business-process-workflow-automated-business-system-concept_335657-400.jpg?w=1060&t=st=1707200884~exp=1707201484~hmac=afa3b40e1226420e49a6d526c2f94bb16e37542184e147812f98ba36724409fb"  header="Data Structure and Algorithm" body= "We are excited to announce the launch of our dedicated community focused on all things DSA. Whether you're a seasoned coder or just beginning your coding journey, this community is the perfect platform to explore, learn, and excel in the world of algorithms and problem-solving. 💻💡 ." link ="https://chat.whatsapp.com/DDA9Vix2xb86lPHvr4GK8L" />
        <CardOne img="https://img.freepik.com/free-vector/operating-system-concept-illustration_114360-2195.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=ais"  header="Open Source" body= "We are thrilled to announce the launch of our brand new WhatsApp community dedicated to all things open source. 🤝 Whether you're a seasoned open source contributor or just starting your journey, this group is the perfect platform to connect, collaborate, and learn together. 📚💡" link ="https://chat.whatsapp.com/ELpn6eu6b1A0lPXZ9Fr8nO" />


    </div>
    </>
  )
}

export default page