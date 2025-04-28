import React from "react";
import { Button } from "../../../../components/ui/button";

export const DivByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1144px]">
      <div className="w-full h-full bg-[url(/landing-fiesta.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <h2 className="font-bold text-white text-[54.5px] text-center tracking-[0] leading-[68px] underline whitespace-nowrap [text-shadow:0px_0px_10px_#1313131a] [font-family:'Inter',Helvetica] mb-8">
          PARTY AND EVENTS
        </h2>

        <Button
          variant="link"
          className="font-bold text-white text-[6.5px] text-center underline [text-shadow:0px_0px_10px_#1313131a] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] p-0 h-auto"
        >
          УЗНАТЬ БОЛЬШЕ
        </Button>
      </div>
    </section>
  );
};
