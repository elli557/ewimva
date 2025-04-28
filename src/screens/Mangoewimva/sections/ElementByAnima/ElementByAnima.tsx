import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const ElementByAnima = (): JSX.Element => {
  // Data for text elements
  const heroContent = {
    title: "NEW NOW",
    cta: "УЗНАТЬ БОЛЬШЕ", // "LEARN MORE" in Russian
  };

  return (
    <section className="relative w-full h-[1144px]">
      <div className="w-full h-full bg-[url(/landing-nn2--1-.png)] bg-cover bg-center relative">
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-[54.5px] font-bold font-['Inter',Helvetica] text-center tracking-[0] leading-[68px] underline whitespace-nowrap [text-shadow:0px_0px_10px_#1313131a]">
            {heroContent.title}
          </h1>

          <a
            href="#"
            className="text-white text-[6.5px] font-bold font-['Inter',Helvetica] text-center tracking-[0] leading-[18px] underline whitespace-nowrap [text-shadow:0px_0px_10px_#1313131a]"
          >
            {heroContent.cta}
          </a>
        </div>

        {/* Scroll to top button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-[63px] right-[66px] w-9 h-9 p-px border border-white bg-transparent hover:bg-white/10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon className="h-6 w-6 text-white" />
        </Button>
      </div>
    </section>
  );
};
