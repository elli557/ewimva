import React from "react";
import { Button } from "../../../../components/ui/button";

export const OverlapWrapperByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1144px]">
      <div className="w-full h-full bg-[url(/landing-linoo.png)] bg-cover bg-center flex flex-col items-center justify-center">
          <h2 className="text-white text-[54.5px] font-bold text-center tracking-[0] leading-[68px] underline whitespace-nowrap [text-shadow:0px_0px_10px_#1313131a] [font-family:'Inter',Helvetica]">
            LINEN COLLECTION
          </h2>

          <Button
            variant="link"
            className="mt-6 p-0 h-auto text-white text-[6.5px] font-bold underline [text-shadow:0px_0px_10px_#1313131a] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]"
          >
            УЗНАТЬ БОЛЬШЕ
          </Button>
        </div>
    </section>
  );
};
