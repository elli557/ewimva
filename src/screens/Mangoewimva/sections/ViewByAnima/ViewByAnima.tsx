import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const ViewByAnima = (): JSX.Element => {
  // Categories data for the top navigation
  const categories = [
    { id: 1, name: "ПЛАТЬЯ И КОМБИНЕЗОНЫ" },
    { id: 2, name: "БРЮКИ" },
    { id: 3, name: "ДЖИНСЫ" },
    { id: 4, name: "КУРТКИ" },
    { id: 5, name: "БЛЕЙЗЕРЫ" },
    { id: 6, name: "РУБАШКИ И БЛУЗКИ" },
    { id: 7, name: "ТОПЫ" },
    { id: 8, name: "ДЖЕМПЕРЫ И КАРДИГАНЫ" },
    { id: 9, name: "ТРЕНЧИ И ПАРКИ" },
    { id: 10, name: "ЮБКИ" },
    { id: 11, name: "ЖИЛЕТЫ" },
    { id: 12, name: "ФУТБОЛКИ" },
    { id: 13, name: "ПАЛЬТО" },
    { id: 14, name: "ШОРТЫ" },
    { id: 15, name: "КУПАЛЬНИКИ" },
    { id: 16, name: "ПИЖАМЫ" },
    { id: 17, name: "КОЖА" },
    { id: 18, name: "ОБУВЬ" },
  ];

  // Help section links
  const helpLinks = [
    { id: 1, title: "ПОМОЩЬ", links: ["МОИ ПОКУПКИ", "ВОЗВРАТЫ"] },
    { id: 2, title: "КОМПАНИЯ", links: ["РАБОТАЙТЕ С НАМИ",] },
    { id: 3, title: "EWIMVA OUTLET", links: ["SITE MAP"] },
    { id: 4, title: "ОТВЕТСТВЕННОСТЬ", links: ["МАГАЗИНЫ"] },
  ];

  // Social media links
  const socialLinks = [
    "INSTAGRAM",
    "FACEBOOK",
    "YOUTUBE",
    "TIKTOK",
    "PINTEREST",
  ];

  // Footer links
  const footerLinks = [
    "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ И ФАЙЛОВ COOKIE",
  ];

  return (
    <section className="w-full bg-white py-8 px-8">
      {/* Top navigation */}
      <div className="mb-16">
        <div className="text-center mb-4">
          <h2 className="font-bold text-black underline leading-[68px]">
            ЖЕНЩИНЫ
          </h2>
        </div>

        <div className="flex flex-wrap gap-x-4 mt-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="font-bold text-black text-xs leading-[18px] whitespace-nowrap cursor-pointer"
            >
              {category.name}
            </div>
          ))}
          <img className="w-6 h-6 ml-auto" alt="Image" src="/image--5--1.svg" />
        </div>
      </div>

      {/* Newsletter subscription */}
      <div className="flex flex-col items-center justify-center my-16 py-8">
        <p className="font-bold text-[#131313] text-[12.5px] text-center mb-8">
          ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
          НОВИНКАХ
        </p>

        <div className="flex items-center gap-2">
          <Input
            className="w-[295px] h-11 border-[#b8b8b8] text-[#131313] text-[13px]"
            placeholder="E-mail"
          />
          <Button
            variant="outline"
            className="w-[125px] h-11 border border-solid border-[#131313] rounded-none"
          >
            <span className="font-bold text-[#131313] text-[12.7px]">
              Подписаться
            </span>
          </Button>
        </div>

        <div className="mt-4 text-center">
          <p className="font-normal text-[#131313] text-[11.9px]">
            Подписываясь, Вы подтверждаете, что ознакомились с
          </p>
          <p className="font-bold text-[#131313] text-[12.7px]">
            Политикой конфиденциальности
          </p>
        </div>
      </div>

      {/* Social media section */}
      <div className="flex flex-col items-center my-16">
        <div className="flex items-center mb-4">
          <span className="font-bold text-black text-[12.7px] mr-4">
            КИРГЫЗСТАН
          </span>
        </div>

        <div className="flex flex-wrap gap-x-4 justify-center">
          {socialLinks.map((social, index) => (
            <span
              key={index}
              className="font-normal text-[#131313] text-[13px] cursor-pointer"
            >
              {social}
            </span>
          ))}
        </div>
      </div>

      {/* Help and company info section */}
      <div className="grid grid-cols-4 gap-8 my-16">
        {helpLinks.map((section) => (
          <div key={section.id} className="flex flex-col gap-4">
            <h3 className="font-bold text-black text-[12.6px]">
              {section.title}
            </h3>
            {section.links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-bold text-black text-[12.2px] cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-16">
        <div className="flex gap-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="font-bold text-[#131313] text-[12.6px] cursor-pointer"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="font-normal text-[#131313] text-[12.3px]">
          © 2025 EWIMVA Все права защищены
        </div>
      </div>
    </section>
  );
};
