import React from "react";
import { Separator } from "../../components/ui/separator";
import { DivByAnima } from "./sections/DivByAnima/DivByAnima";
import { Element1ByAnima } from "./sections/Element1ByAnima";
import { ElementByAnima } from "./sections/ElementByAnima";
import { ElementWrapperByAnima } from "./sections/ElementWrapperByAnima";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima";
import { ViewByAnima } from "./sections/ViewByAnima/ViewByAnima";

export const Mangoewimva = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "ЖЕНЩИНЫ", active: true },
    { text: "ВОЙТИ", active: false },
    { text: "ИСКАТЬ", active: false },
    { text: "ФАВОРИТЫ", active: false },
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1920px] relative">
        <header className="w-full h-14 bg-white flex items-center justify-between px-8">
          <div className="relative">
            <div className="text-[12.7px] [font-family:'Inter',Helvetica] font-bold text-[#131313] tracking-[0] leading-[18px]">
              {navLinks[0].text}
            </div>
            <Separator className="w-[75px] h-0.5 mt-1 bg-[#131313]" />
          </div>

          <img className="h-[18px] w-[108px]" alt="Svg" src="/svg.svg" />

          <div className="flex items-center gap-8">
            <div className="text-[12.6px] [font-family:'Inter',Helvetica] font-bold text-[#131313] tracking-[0] leading-[18px]">
              {navLinks[2].text}
            </div>
            <div className="text-[12.8px] [font-family:'Inter',Helvetica] font-bold text-[#131313] tracking-[0] leading-[18px]">
              {navLinks[1].text}
            </div>
            <div className="text-[13px] [font-family:'Inter',Helvetica] font-bold text-[#131313] tracking-[0] leading-[18px]">
              {navLinks[3].text}
            </div>
          </div>
        </header>

        <div className="flex flex-col w-full">
          <ElementByAnima />

          <div className="w-full">
            <ElementWrapperByAnima />
            <OverlapWrapperByAnima />
          </div>

          <OverlapGroupWrapperByAnima />
          <DivByAnima />
          <SectionComponentNodeByAnima />
          <Element1ByAnima />
          <ViewByAnima />
        </div>
      </div>
    </div>
  );
};
