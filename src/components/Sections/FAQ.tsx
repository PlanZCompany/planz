import GenericHeading from "../Generic/GenericHeading";
import { Locale } from "@/types";
import GenericParagraph from "../Generic/GenericParagraph";
import { FAQ_ITEMS, getFaqSectionCopy } from "../../../content/data/faq";
import { FaqItem } from "../Custom/FAQItem";
import Badge from "../Custom/Badge";

const FAQSection = ({ locale }: { locale: Locale }) => {
  const results = getFaqSectionCopy(locale);
  const { description, heading, eyebrow } = results;

  const faqsContent = FAQ_ITEMS.map((faq, index) => {
    return (
      <FaqItem
        key={`${faq.id}-${index}`}
        answer={faq.answer[locale]}
        question={faq.question[locale]}
        defaultOpen={index === 0}
        id={faq.id}
        locale={locale}
      />
    );
  });

  return (
    <section className="w-full flex scroll-mt-20 pt-10 md:pt-20" id="home">
      <article className="w-full content_wrapper flex flex-col gap-6 md:gap-14">
        <div className="w-full flex">
          <div className="w-full md:w-fit md:min-w-[45%] flex flex-col gap-2 md:gap-3">
            <div className="w-fit">
              <Badge heading={eyebrow} />
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
                {eyebrow}
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

        <div className="w-full flex flex-col gap-2 md:gap-3">{faqsContent}</div>
      </article>
    </section>
  );
};

export default FAQSection;
