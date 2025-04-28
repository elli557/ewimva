import React from "react";
import { Button } from "../../../../components/ui/button";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  return (
    <section className="w-full h-[1144px] relative">
      <div className="w-full h-full bg-[url(/landing-cherry.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <h2 className="text-white text-[54.5px] font-bold font-['Inter',Helvetica] tracking-[0] leading-[68px] underline text-center [text-shadow:0px_0px_10px_#1313131a]">
          ON TREND: CHERRY RED
        </h2>

        <Button
          variant="link"
          className="mt-6 text-white text-[6.5px] font-bold font-['Inter',Helvetica] tracking-[0] leading-[18px] underline [text-shadow:0px_0px_10px_#1313131a]"
        >
          УЗНАТЬ БОЛЬШЕ
        </Button>
      </div>
    </section>
  );
};
