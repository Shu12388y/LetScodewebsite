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
                  The information you&apos;re providing is really good in both
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
                  really appreciable since we don&apos;t get to know about various
                  openings in the industry and this kind of help is great and
                  please keep posting like this.
                </p>
              </div>
            </div>
            {/* Card 4 */}

            <div className="rounded-2xl p-4 bg-white">
              <div className="text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    width={500}
                    height={500}
                    alt="testimonial"
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/D4D35AQFk-cjqD2InDg/profile-framedphoto-shrink_400_400/0/1694364186357?e=1711861200&v=beta&t=-LKkz7BBa6p55UEWS0n0FwQhL17kJHEM3yhghed62ws"
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Amishika Batra
                  </h2>
                </div>
                <p className="leading-relaxed">
                  Your overall material is very good. But can you also provide
                  data science interview questions like what GoComet and Miq
                  companies ask for this role. Just to get an idea.
                </p>
              </div>
            </div>

            {/* card 5 */}

            <div className="rounded-2xl p-4 bg-white">
              <div className="text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    width={500}
                    height={500}
                    alt="testimonial"
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/D4D35AQGTQrOXVPMjfA/profile-framedphoto-shrink_400_400/0/1710442330370?e=1711861200&v=beta&t=K2W-PQ2KvJEjDmYEjdLZ_MR15FQvCcIMP6TsizhGwWE"
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Megha Chhapre
                  </h2>
                </div>
                <p className="leading-relaxed">
                  I wanted to extend a heartfelt thankyou for the valuable
                  information you share with us students. For being a source of
                  guidance and support for all of us, Your generosity in sharing
                  your knowledge is commendable, and we feel fortunate to
                  benefit from your expertise.
                </p>
              </div>
            </div>

            {/* card 6 */}
            <div className="rounded-2xl p-4 bg-white">
              <div className="text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    width={500}
                    height={500}
                    alt="testimonial"
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/D5603AQElCdChPX2JZA/profile-displayphoto-shrink_400_400/0/1704464004528?e=1717027200&v=beta&t=VZH8nG62jHz1yN4SkO8r8WaTpfZftIC35sapH-Ai30s"
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Prachi Kesharwani
                  </h2>
                </div>
                <p className="leading-relaxed">
                  I want to express my deepest gratitude to each and every
                  member of this Let&apos;s Code 🤗 community (Avinash sir
                  especially). Your support and dedication have played a
                  significant role in helping me access invaluable technical
                  resources and fostering my growth in the computer science
                  domain. 
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
