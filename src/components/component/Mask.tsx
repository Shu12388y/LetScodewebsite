"use client";
import { MaskContainer } from "../ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            Open source is not just about code; it&apos;s about the spirit of
            collaboration, the freedom to innovate, and the power of community
            to create technology that empowers everyone.
          </p>
        }
        className="h-[40rem]"
      >
        <span className="text-green-500">Open source is not just about code</span>; it&apos;s about the spirit of
        collaboration, the freedom to innovate, <span className="text-green-500">and the power of community</span> to
        create technology that empowers everyone.
      </MaskContainer>
    </div>
  );
}
