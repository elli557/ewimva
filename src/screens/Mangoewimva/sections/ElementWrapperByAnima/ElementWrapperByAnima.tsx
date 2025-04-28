import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ElementWrapperByAnima = (): JSX.Element => {
  // Define the category data for easier mapping
  const categories = [
    {
      id: 1,
      name: "ПЛАТЬЯ",
      image: "/87098649-99-d6--1-.png",
      position: { row: 1, col: 1 },
    },
    {
      id: 2,
      name: "ТОПЫ",
      image: "/87069215-99-d6--1-.png",
      position: { row: 1, col: 2 },
    },
    {
      id: 3,
      name: "БРЮКИ",
      image: "/family-woman--22-.png",
      position: { row: 2, col: 1 },
    },
    {
      id: 4,
      name: "СУМКИ",
      image: "/17031172-02-o.png",
      position: { row: 2, col: 2 },
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      {categories.map((category) => (
        <Card key={category.id} className="border-0 rounded-none h-[960px]">
          <CardContent className="p-0 h-full relative">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute bottom-[50px] left-8 font-bold text-white text-[13px] underline [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                {category.name}
              </div>
              <div className="absolute bottom-[50px] right-[155px] font-bold text-white text-[12.8px] text-center underline [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                ПОСМОТРЕТЬ ВСЕ
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
