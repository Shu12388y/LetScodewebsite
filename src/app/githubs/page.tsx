import React from 'react'

function page() {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-40'>
        <h1 className='text-4xl font-bold mb-3'>GitHub Profile Optimization</h1>
        <h2 className='text-2xl mb-3'>Welcome to GitHub Profile Optimization 1:1 session</h2>
        <p className='text-left px-20 mb-3'>Are you a developer or a job seeker and seeking to make a lasting impression on the coding community? Look no further! Our GitHub Profile Optimization Service is here to transform your GitHub presence into a powerful showcase of your skills and expertise.</p>
        <p className='text-left px-20'>Your GitHub profile is like your tech resume but cooler. It's where you can show off the awesome coding projects you've worked on, prove you know your stuff, and even demonstrate how well you play with others in the coding world. It's not just a bunch of code; it's a living, breathing showcase of what you can do. So, when you're job hunting in tech, having a killer GitHub profile is like having a secret weapon that lets employers see exactly what you bring to the table—coding skills, problem-solving mojo, and a passion for learning and growing. It's your chance to stand out in a sea of job seekers and say, "Check out what I can do!"</p>
        <div>
            <h1 className=' text-center text-3xl mt-10 mb-5'>What We Offer: </h1>
            <ol>
                <li>1. Professional Profile Overhaul:</li>
                <p className='ml-6 mb-3'>We will revamp your GitHub profile to make it visually appealing, user-friendly, and reflective of your unique coding style.</p>
                <li>2. Project Portfolio Enhancement:</li>
                <p className='ml-6 mb-3'>Showcase your projects effectively with optimized project descriptions, README files, and visually appealing repository layouts.</p>
                <li>3. 
                Skills Highlight:
                </li>
                <p className='ml-6 mb-3'>Ensure that your key skills are prominently featured, making it easy for potential collaborators and employers to recognize your strengths.</p>
                <li>4. Contributions Showcase:</li>
                <p className='ml-6 mb-3'>Emphasize your contributions through eye-catching visuals and comprehensive documentation.</p>
                <li>5. Custom Badges and Shields:</li>
                <p className='ml-6 mb-3'>Create custom badges and shields to highlight achievements, certifications, and other notable recognitions.</p>
                <li>6. GitHub Stats Integration:</li>
                <p className='ml-6 mb-3'>Integrate dynamic GitHub stats into your profile for a real-time display of your activity and impact.</p>

            </ol>
        </div>
        <div>
            <h1 className='text-2xl font-bold mb-5 mt-6'>Extra benefits :</h1>
            <div>
                <ol>
                    <li className='mb-3'>
1. we will add you in our premium whatsapp group for specific batch wise job updates .</li>
                    <li className='mb-3'>2. We will provide you ATS friendly resume template.</li>
                    <li className='mb-3'>3. Placement material and resources for job hunt.</li>
                </ol>
            </div>
        </div>
        <div className=''>
              <h1 className='text-2xl font-bold text-center mt-20 mb-10'>Fill Your details</h1>
<div className='flex flex-col items-center justify-center'>
    <div className='flex flex-col justify-center '>

    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="name">Name</label>
    <input placeholder='ENTER YOUR NAME' className='p-1 mb-3 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' required type="text" id="name"/>
    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="email ">Email</label>
    <input placeholder='ENTER YOUR EMAIL' className='p-1 mb-3 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' required type="email" id="email"/>
    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="number">Whatsapp Number</label>
    <input placeholder='ENTER YOUR NUMBER' className='p-1 mb-3 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' required type="phone" id="number"/>
    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="">Graduation year</label>
    <input placeholder="ENTER GRADUATION YEAR " className='p-1 mb-3 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' required type="text" />
    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="name">College Name</label>
    <input placeholder="ENTER YOUR COLLEGE NAME" className='p-1 mb-3 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' required type="text" id="name"/>
    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="name">Github Profile Link</label>
    <input placeholder='ENTER YOUR GITHUB PROFILE LINK' className='p-1 mb-3 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' required type="text" id="name"/>
    <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor="name">Linkedin profile link</label>
    <input placeholder="ENTER YOUT LINKEDLN PROFILE LINK" className=' mb-5 p-1  flex h-10 w-[400px] rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'  required type="text" id="name"/>
    <button className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Pay Now</button>
    </div>
</div>

            
        </div>
    </div>
    </>
  )
}

export default page