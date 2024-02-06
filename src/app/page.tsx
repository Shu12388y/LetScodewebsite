import { HeroParallaxDemo } from "@/components/component/HeroSection";
import {BentoGridThirdDemo} from "@/components/component/Content";
import { TypewriterEffectDemo } from "@/components/component/NewLetter";
import {SVGMaskEffectDemo} from "@/components/component/Mask";
export default function Home() {
  return (
    <>
    <div>
<div>
</div>
    <HeroParallaxDemo/>
    </div>
    <div className="mt-20">

    <BentoGridThirdDemo/>
    </div>
    <div className="mt-10 mb-10">
      <SVGMaskEffectDemo/>
    </div>
    <div className="mt-20">
    <TypewriterEffectDemo/>
    </div>
    
    </>
    
  );
}
