import GenericHeading from "../Generic/GenericHeading";
import { Locale } from "@/types";
import GenericParagraph from "../Generic/GenericParagraph";
import GenericImage from "../Generic/GenericImage";
import {
  getTechSectionCopy,
  TECH_BENEFITS,
  TECH_FEATURE_IMAGES,
} from "../../../content/data/tech";
import Badge from "../Custom/Badge";

const Tech = ({ locale }: { locale: Locale }) => {
  const results = getTechSectionCopy(locale);
  const { description, heading, eyebrow } = results;

  const featuresContent = TECH_BENEFITS.map((feature, index) => (
    <li
      key={`${feature.id}-${index}`}
      className=" px-4 py-2 flex justify-center items-start md:items-center gap-2 w-full md:w-fit"
    >
      <div className="flex justify-center items-center bg-primaryGreen rounded-full border border-primaryDarkGreen p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-check"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </div>
      <GenericParagraph
        pType="small"
        fontStyle={
          locale === "en"
            ? "font-clash font-normal"
            : "font-sansation font-normal"
        }
        textColor="text-white"
      >
        {feature.text[locale]}
      </GenericParagraph>
    </li>
  ));

  const imagesContent = TECH_FEATURE_IMAGES.map((image, index) => {
    const borderLeft =
      index !== 2 && index !== 5 && index !== 8 && index !== 11
        ? "border-r-3"
        : "";
    const borderBottom = index <= 8 ? "border-b-3" : "";

    return (
      <li
        key={`${image.id}`}
        className={`flex-1 p-4 md:p-6 border-r-primaryDarkGreen border-b-primaryDarkGreen ${borderLeft} ${borderBottom}`}
      >
        <GenericImage
          src={image.image.src}
          alt={image.image.alt}
          wrapperClassName="w-full h-full relative"
          imageClassName="w-full h-full object-contain"
          fill={true}
        />
      </li>
    );
  });

  return (
    <section className="w-full flex scroll-mt-20 pt-10 md:pt-20" id="home">
      <article className="w-full content_wrapper flex flex-col gap-6 md:gap-14">
        <div className="w-full flex">
          <div className="w-full flex">
            <div className="mt-auto h-0.5 bg-white w-full"></div>
          </div>
          <div className="w-full md:w-fit md:min-w-[45%] flex flex-col gap-2 md:gap-3">
            <div className="w-full justify-center md:justify-end flex">
              <Badge heading={eyebrow} />
            </div>
            {/* <div className="w-full md:w-fit flex items-center gap-2 md:ml-auto">
              <div className="size-5 bg-primaryGreen rounded-full"></div>
              <GenericParagraph
                pType="regular"
                fontStyle={
                  locale === "en"
                    ? "font-clash font-normal"
                    : "font-sansation font-normal"
                }
              >
                {eyebrow}
              </GenericParagraph>
            </div> */}

            <div className="w-full md:w-fit">
              <GenericHeading
                headingType="h2"
                extraClass="text-center! md:text-right!"
              >
                {heading}
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
                {description}
              </GenericParagraph>
            </div>
          </div>
        </div>
        <div className="w-full content_wrapper flex flex-col md:flex-row rounded-3xl overflow-hidden border-2 border-primaryDarkGreen gray-gradient_3 p-4 md:p-6">
          <div className="flex-1 flex flex-col gap-1">{featuresContent}</div>
          <div className="flex-1 px-4 md:px-6">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-0.5 w-full h-full">
              {imagesContent}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Tech;
