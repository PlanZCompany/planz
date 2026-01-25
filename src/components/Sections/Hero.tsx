import GenericHeading from "../Generic/GenericHeading";
import { getHero } from "../../../content/data/hero";
import { Locale } from "@/types";
import Badge from "../Custom/Badge";
import ContactButton from "../Custom/ContactButton";
import PhoneTwoContacts from "../Custom/PhoneTwoContacts";

const Hero = ({ locale }: { locale: Locale }) => {
  const hero = getHero(locale);
  return (
    <section className="w-full flex min-h-screen scroll-mt-20" id="home">
      <div className="flex-1 relative z-6 w-full flex">
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="mb-4 md:mb-[unset]">
            <Badge heading="PlanZ" locale={"en"} />
          </div>
          <div className="w-full mb-4 content_wrapper">
            <GenericHeading
              headingType="h1"
              align="text-center"
              fontStyle={
                locale === "en"
                  ? "font-clash font-bold"
                  : "font-sansation font-bold"
              }
            >
              {hero.title}
            </GenericHeading>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-m">
            <ContactButton text={hero.button} />
            <PhoneTwoContacts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
