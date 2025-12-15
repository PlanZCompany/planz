import GenericHeading from "../Generic/GenericHeading";
import { Locale } from "@/types";
import { getResultsCopy } from "../../../content/data/results";
import GenericParagraph from "../Generic/GenericParagraph";
import GenericImage from "../Generic/GenericImage";
import Badge from "../Custom/Badge";

const Results = ({ locale }: { locale: Locale }) => {
  const results = getResultsCopy(locale);
  const { description, heading, subheading, images } = results;

  const imagesContent = images.map((image, index) => {
    return (
      <li key={`${image}-${index}`} className="flex-1">
        <GenericImage
          src={image.src}
          alt={image.alt}
          wrapperClassName="w-full aspect-3/2 relative gray_card_gradient rounded-2xl border-2 border-primaryDarkGreen overflow-hidden"
          imageClassName="w-full h-full object-contain"
          fill={true}
        />
      </li>
    );
  });

  return (
    <section className="w-full flex scroll-mt-20" id="home">
      <article className="w-full content_wrapper flex flex-col gap-6 md:gap-14">
        <div className="w-full flex">
          <div className="w-full md:w-fit md:min-w-[45%] flex flex-col gap-2 md:gap-3">
            <div className="w-fit">
              <Badge heading={subheading} />
            </div>
            {/* <div className="w-full md:w-fit flex items-center gap-2">
              <div className="size-5 bg-primaryGreen rounded-full"></div>
              <GenericParagraph
                pType="regular"
                fontStyle={
                  locale === "en"
                    ? "font-clash font-normal"
                    : "font-sansation font-normal"
                }
              >
                {subheading}
              </GenericParagraph>
            </div> */}

            <div className="w-full md:w-fit">
              <GenericHeading headingType="h2">{heading}</GenericHeading>
              <GenericParagraph pType="large">{description}</GenericParagraph>
            </div>
          </div>

          <div className="w-full flex">
            <div className="mt-auto h-0.5 bg-white w-full"></div>
          </div>
        </div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {imagesContent}
        </ul>
      </article>
    </section>
  );
};

export default Results;
