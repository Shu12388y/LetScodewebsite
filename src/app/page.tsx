import { HeroParallaxDemo } from "@/components/component/HeroSection";
import {BentoGridThirdDemo} from "@/components/component/Content";
import { TypewriterEffectDemo } from "@/components/component/NewLetter";
import {SVGMaskEffectDemo} from "@/components/component/Mask";
import { CardTwo } from "@/components/component/Card";
export default function Home() {
  return (
    <>
    <div className="bg-slate-50">

    <div>
    <HeroParallaxDemo/>
    </div>
    <div className="mt-20">

    <BentoGridThirdDemo/>
    </div>
    <div className="flex justify-center flex-col px-20 py-10">
      <h1 className="mt-20 mb-20 text-center font-bold text-4xl">Achievements </h1>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:justify-center">
        <CardTwo header="50k+ community" img="https://img.freepik.com/free-vector/hand-drawn-community-spirit-illustration_23-2150194851.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph" body="50k+ community on Linkedin + Instagram + whatsapp and telegram."/>
        <CardTwo header="Guiding 7k+ College students" img="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-3027.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph" body="Guiding 7k+ College students in their placements by providing regular opportunity updates and free placement resources."/>
        <CardTwo header="10 + tech groups" img="https://img.freepik.com/free-vector/flat-world-population-day-background-with-planet-people_23-2149427306.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph" body="10 + tech groups Like DSA , Full stack , Cloud ,AI/Ml,Open source , where we solve doubts of group members and share helpful resources."/>
        <CardTwo header="Building products" img="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-4240.jpg?size=626&ext=jpg&ga=GA1.1.524731057.1707142283&semt=sph" body="Building products to solve real world problems ( Scam alert - work in progress) or you can add in your language)"/>

      </div>
    </div>
    <div className="mt-10 mb-10">
      <SVGMaskEffectDemo/>
    </div>
    <div className="mt-20">
    <TypewriterEffectDemo/>
    </div>
    
    </div>
    </>
    
  );
}
