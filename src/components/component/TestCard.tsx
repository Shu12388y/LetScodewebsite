import React from "react";
import Image from "next/image";

function TestCard() {
  return (
    <>
      <section className="text-gray-600 bg-slate-200 p-10 w-[80rem]  body-font">
        <h1 className="text-center font-bold text-4xl text-black">
          Hear from our awesome users!
        </h1>
        <div className="container px-5 py-8 sm:py-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl p-4 bg-white">
              <div className="text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    width={500}
                    height={500}
                    alt="testimonial"
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/D4D03AQEo8yJDvKlxww/profile-displayphoto-shrink_400_400/0/1674955885325?e=1717027200&v=beta&t=loNlGjRcqFaksG1HPNw6fbhB8tMgQybTXPsN0-5EoB0"
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Ritu Verma
                  </h2>
                </div>
                <p className="leading-relaxed">
                  The information you're providing is really good in both
                  quality and quantity. Your work is really helpful for lazy
                  people like me.. Who are always in search of good things
                  without netsurfing. Keep doing good work... Thank you.{" "}
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl p-4 bg-white">
              <div className="text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    width={500}
                    height={500}
                    alt="testimonial"
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/C5603AQGDo4xVFHdY7Q/profile-displayphoto-shrink_400_400/0/1656421391128?e=1717027200&v=beta&t=o-ipEj3ZzXpUKpRe9FapEIl0bsEdtOLlvIO3HKbS6Sc"
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Naman Gaur
                  </h2>
                </div>
                <p className="leading-relaxed">
                  Helpful content shared, I suggest uploading aptitude materials
                  and more questions that have been in big tech companies
                  previously.{" "}
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl p-4 bg-white">
              <div className="text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    width={500}
                    height={500}
                    alt="testimonial"
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/D4D03AQHzeBrp3307xQ/profile-displayphoto-shrink_400_400/0/1705071722594?e=1717027200&v=beta&t=2xJ1chUgSZj0_9Q1MlWl47lg1Q2YBNhdsI4hwnqZwzI"
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Ritu Kumari
                  </h2>
                </div>
                <p className="leading-relaxed">
                  Thank you for providing various preparatory materials and
                  information about various internships and jobs.... It is
                  really appreciable since we don't get to know about various
                  openings in the industry and this kind of help is great and
                  please keep posting like this.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestCard;
