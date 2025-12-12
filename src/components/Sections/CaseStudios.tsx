import { Locale } from "@/types";
import GenericParagraph from "../Generic/GenericParagraph";
import GenericHeading from "../Generic/GenericHeading";
import { CASE_STUDIES } from "../../../content/data/case";
import GenericImage from "../Generic/GenericImage";
import Link from "next/link";

const CaseStudios = ({ locale }: { locale: Locale }) => {
  const { heading, subheading, extraText, projects } = CASE_STUDIES;
  const projectsContent = projects.map((project) => {
    const featuresContent = project.features[locale].map((feature, index) => (
      <li
        key={`${feature}-${index}`}
        className="border border-gray-400 bg-primaryDarkGreen/20 px-4 py-2 rounded-[100px] flex justify-center items-center w-full md:w-fit"
      >
        <GenericParagraph
          pType="small"
          fontStyle={
            locale === "en"
              ? "font-clash font-normal"
              : "font-sansation font-normal"
          }
          textColor="text-white"
        >
          {feature}
        </GenericParagraph>
      </li>
    ));

    return (
      <li
        key={project.title.en}
        className="w-full min-h-[500px] max-w-[1000px] mx-auto 
        rounded-3xl overflow-hidden relative border-2 border-primaryDarkGreen gray_card_gradient p-4 md:p-6 flex flex-col md:flex-row"
      >
        <div className="flex-1 md:max-w-[45%] flex">
          <div className="w-full flex flex-col gap-4 md:gap-5 m-auto">
            <div className="border border-gray-400 bg-primaryDarkGreen/20 px-4 py-2 rounded-[100px] flex justify-center items-center w-full md:w-fit">
              <GenericParagraph
                pType="regular"
                fontStyle={
                  locale === "en"
                    ? "font-clash font-normal"
                    : "font-sansation font-normal"
                }
                textColor="text-white"
              >
                {project.type[locale]}
              </GenericParagraph>
            </div>

            <GenericHeading
              headingType="h3"
              align="text-left"
              fontStyle="font-sansation font-bold"
            >
              {project.title[locale]}
            </GenericHeading>
            <GenericParagraph
              fontStyle={
                locale === "en"
                  ? "font-clash font-normal"
                  : "font-sansation font-normal"
              }
              textColor="text-white"
              pType="regular"
              extraClass="opacity-[90]"
            >
              {project.description[locale]}
            </GenericParagraph>

            <ul className="w-full flex flex-wrap gap-3">{featuresContent}</ul>

            <div className="mt-auto w-full pt-4">
              <Link
                href={project.url}
                className="w-full flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GenericParagraph
                  pType="regular"
                  fontStyle={
                    locale === "en"
                      ? "font-clash font-normal"
                      : "font-sansation font-normal"
                  }
                  textColor="text-primaryGreen"
                >
                  {locale === "en" ? "View Project" : "Разгледай Проектът"}
                </GenericParagraph>

                <div className="size-8 rounded-full bg-primaryDarkGreen flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 md:max-w-[55%] relative">
          <GenericImage
            src={project.image}
            alt={project.title[locale]}
            wrapperClassName="w-full min-h-[400px] h-full relative"
            imageClassName="w-full h-full object-contain"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        </div>
      </li>
    );
  });

  return (
    <section className="w-full flex scroll-mt-20 pt-10 md:py-20" id="case">
      <article className="w-full content_wrapper flex flex-col gap-6 md:gap-14">
        <div className="w-full flex">
          <div className="w-full flex">
            <div className="mt-auto h-0.5 bg-white w-full"></div>
          </div>
          <div className="w-full md:w-fit md:min-w-[45%] flex flex-col gap-2 md:gap-3">
            <div className="w-full md:w-fit flex items-center gap-2 md:ml-auto">
              <div className="size-5 bg-primaryGreen rounded-full"></div>
              <GenericParagraph
                pType="regular"
                fontStyle={
                  locale === "en"
                    ? "font-clash font-normal"
                    : "font-sansation font-normal"
                }
              >
                {extraText[locale]}
              </GenericParagraph>
            </div>

            <div className="w-full md:w-fit">
              <GenericHeading
                headingType="h2"
                extraClass="text-center! md:text-right!"
              >
                {heading[locale]}
              </GenericHeading>
              <GenericParagraph
                pType="large"
                extraClass="text-center md:text-right"
                fontStyle={
                  locale === "en"
                    ? "font-clash font-normal"
                    : "font-sansation font-normal"
                }
              >
                {subheading[locale]}
              </GenericParagraph>
            </div>
          </div>
        </div>
        {/* PROJECTS */}
        <ul className="w-full flex-col flex gap-10">{projectsContent}</ul>
      </article>
    </section>
  );
};

export default CaseStudios;
