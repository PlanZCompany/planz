"use client";

import { Locale } from "@/types";
import {
  PROCESS_SECTION_COPY,
  PROCESS_STEPS,
} from "../../../content/data/process";
import GenericParagraph from "../Generic/GenericParagraph";
import GenericHeading from "../Generic/GenericHeading";
import Badge from "../Custom/Badge";

const Process = ({ locale }: { locale: Locale }) => {
  const { heading, subheading, extraText } = PROCESS_SECTION_COPY;
  const processSteps = PROCESS_STEPS;

  const processStepsContent = processSteps.map((step, index) => {
    const horizontalLineExist =
      index === 0 || index === 1 || index === 3 || index === 4;
    let horizontalAnimationDelay = 0;
    if (index === 0) {
      horizontalAnimationDelay = 0;
    } else if (index === 1) {
      horizontalAnimationDelay = 0.5;
    } else if (index === 3) {
      horizontalAnimationDelay = 1;
    } else if (index === 4) {
      horizontalAnimationDelay = 1.5;
    }
    const horizontalLine = (
      <div className="hidden xl:block absolute right-0 top-[50%] translate-y-[-50%] w-40 h-1 bg-primaryDarkGreen/80 translate-x-[50%] z-[-1]">
        <div
          className="absolute left-0 top-[50%] translate-y-[-50%] w-3 h-3 bg-primaryGreen rounded-full pulse_line"
          style={{ animationDelay: `${horizontalAnimationDelay}s` }}
        ></div>
      </div>
    );
    const verticalLineExist =
      index === 0 || index === 1 || index === 2 || index === 3 || index === 4;
    let verticalAnimationDelay = 0;
    if (index === 0) {
      verticalAnimationDelay = 0;
    } else if (index === 1) {
      verticalAnimationDelay = 0.5;
    } else if (index === 2) {
      verticalAnimationDelay = 1;
    } else if (index === 3) {
      verticalAnimationDelay = 1.5;
    }

    const areLastTwoInMobile = index === 3 || index === 4;

    const verticalLine = (
      <div
        className={`absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] w-1 h-40 bg-primaryDarkGreen/80 z-[-1]
      ${areLastTwoInMobile ? "xl:opacity-0" : ""}
      `}
      >
        <div
          className="absolute top-0 left-[50%] translate-x-[-50%] w-3 h-3 bg-primaryGreen rounded-full pulse_line_vertical"
          style={{ animationDelay: `${verticalAnimationDelay}s` }}
        ></div>
      </div>
    );
    return (
      <li className={`w-full relative`} key={step.id}>
        {horizontalLineExist && horizontalLine}
        {verticalLineExist && verticalLine}
        <article className="flex-1 min-h-[350px] rounded-3xl overflow-hidden border-2 border-primaryDarkGreen flex justify-center items-center p-4 relative">
          <div className="absolute inset-0 gray_card_gradient"></div>

          <div className="flex m-auto flex-col w-full gap-2 md:gap-3 relative z-2">
            <div className="w-full">
              <GenericHeading
                headingType="h4"
                align="text-center"
                fontStyle={
                  locale === "en"
                    ? "font-clash font-bold"
                    : "font-sansation font-bold italic"
                }
                textColor="text-primaryGreen"
                extraClass="max-w-[90%] mx-auto text-pretty"
              >
                {step.title[locale]}
              </GenericHeading>
            </div>

            <div className="w-full">
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
                {step.description[locale]}
              </GenericParagraph>
            </div>
          </div>
        </article>
      </li>
    );
  });

  return (
    <section className="w-full flex scroll-mt-20" id="process">
      <article className="w-full content_wrapper flex flex-col gap-6 md:gap-14">
        <div className="w-full flex">
          <div className="w-full md:w-fit md:min-w-[45%] flex flex-col gap-2 md:gap-3">
            <div className="w-fit mx-auto md:mx-[unset]">
              <Badge heading={extraText[locale]} />
            </div>

            <div className="w-full md:w-fit">
              <GenericHeading
                headingType="h2"
                align="portrait:text-center landscape:text-left"
                fontStyle={
                  locale === "en"
                    ? "font-clash font-bold"
                    : "font-sansation font-bold"
                }
                extraClass="mb-2 md:mb-[unset]"
              >
                {heading[locale]}
              </GenericHeading>
              <GenericParagraph
                pType="large"
                extraClass="text-center md:text-left"
              >
                {subheading[locale]}
              </GenericParagraph>
            </div>
          </div>

          <div className="w-full hidden md:flex">
            <div className="mt-auto h-0.5 bg-white w-full"></div>
          </div>
        </div>
        <ul className="w-full grid grid-cols-1 xl:grid-cols-3 md:gap-x-20 gap-y-20">
          {processStepsContent}
        </ul>
      </article>
    </section>
  );
};

export default Process;
