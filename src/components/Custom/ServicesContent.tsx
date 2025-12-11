"use client";

import { Locale } from "@/types";
import { getHeroServices } from "../../../content/data/hero";
import GenericHeading from "../Generic/GenericHeading";
import { useEffect, useState } from "react";
import GenericParagraph from "../Generic/GenericParagraph";
import GenericImage from "../Generic/GenericImage";

const ServicesContent = ({ locale }: { locale: Locale }) => {
  const [currentHeading, setCurrentHeading] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);

  const servicesContent = getHeroServices(locale);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading(
        (prevIndex) => (prevIndex + 1) % servicesContent.length
      );
      setCurrentDescription(
        (prevIndex) => (prevIndex + 1) % servicesContent.length
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [servicesContent.length]);

  return (
    <div className="flex flex-1 p-6 md:p-20">
      <article className="flex-1 rounded-3xl overflow-hidden border-2 border-primaryDarkGreen flex justify-center items-center relative">
        <div className="absolute inset-0 z-2 gray_card_gradient"></div>
        <GenericImage
          src="/static/services.png"
          alt="Нашите услуги / Our services"
          wrapperClassName="absolute inset-0 z-3 opacity-50"
          imageClassName="w-full h-full object-cover"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        />
        <div className="flex m-auto flex-col w-full gap-4 md:gap-6 relative z-4">
          <div className="w-full appear_desseapear">
            <GenericHeading
              headingType="h3"
              align="text-center"
              fontStyle={
                locale === "en"
                  ? "font-clash font-bold"
                  : "font-sansation font-bold italic"
              }
              textColor="text-primaryGreen"
              extraClass="max-w-[90%] mx-auto text-pretty"
            >
              {servicesContent[currentHeading].title}
            </GenericHeading>
          </div>

          <div className="w-full appear_desseapear2">
            <GenericParagraph
              fontStyle={
                locale === "en"
                  ? "font-clash font-normal"
                  : "font-sansation font-normal"
              }
              textColor="text-white"
              extraClass="max-w-[90%] mx-auto text-pretty text-center"
              pType="large"
            >
              {servicesContent[currentDescription].description}
            </GenericParagraph>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ServicesContent;
