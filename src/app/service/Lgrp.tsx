import Image from "next/image";

const Lgrp = () => {
    return (
      <div className="flex justify-center items-center w-full"> {/* Updated w-screen to w-full */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto rounded-lg shadow-md flex flex-col md:flex-row items-center p-8 w-full"> {/* Removed max-w-screen-lg */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
              <Image width={500} height={500} className="object-cover object-center rounded" alt="hero" src="/LGRP.png" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="text-3xl mb-4 font-medium text-gray-900">LGRP</h1>
              <p className="mb-8 leading-relaxed">Stand out with the complete engineer&apos;s brand toolkit - LGRP by LET&apos;S CODE.</p>
              <p className="mb-8 leading-relaxed">Fast-track your career by unlocking potential across LinkedIn, GitHub, Resumes and Portfolios. Build your professional presence with our coaching and resources.</p>
              <p className="mb-8 leading-relaxed">Join thousands of engineers accelerating success through LGRP.</p>
              <p className="mb-8 leading-relaxed">Take your profile to the next level today!</p>
              <div className="flex justify-center w-full"> {/* Center the button */}
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Lgrp;
  