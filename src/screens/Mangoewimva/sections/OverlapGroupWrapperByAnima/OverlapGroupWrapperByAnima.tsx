import React from "react";
import { Button } from "../../../../components/ui/button";

export const OverlapGroupWrapperByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1144px]">
      <div className="w-full h-full bg-[url(/landing-whitec.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <h2 className="font-shop-mango-com-semantic-heading-2-underline-upper font-[number:var(--shop-mango-com-semantic-heading-2-underline-upper-font-weight)] text-white text-[length:var(--shop-mango-com-semantic-heading-2-underline-upper-font-size)] text-center tracking-[var(--shop-mango-com-semantic-heading-2-underline-upper-letter-spacing)] leading-[var(--shop-mango-com-semantic-heading-2-underline-upper-line-height)] underline [text-shadow:0px_0px_10px_#1313131a] [font-style:var(--shop-mango-com-semantic-heading-2-underline-upper-font-style)]">
          WHITE COLLECTION
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
