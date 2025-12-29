import GenericHeading from "../Generic/GenericHeading";
import { getHero } from "../../../content/data/hero";
import GenericButton from "../Generic/GenericButton";
import { PhoneIcon } from "@/assets/icons";
import { Locale } from "@/types";
import Badge from "../Custom/Badge";
import ContactButton from "../Custom/ContactButton";
import Link from "next/link";

const Hero = ({ locale }: { locale: Locale }) => {
  const hero = getHero(locale);
  return (
    <section className="w-full flex min-h-screen scroll-mt-20" id="home">
      <div className="flex-1 relative z-6 flex flex-col justify-center items-center w-full content_wrapper">
        <div className="mb-4 md:mb-[unset]">
          <Badge heading="PlanZ" locale={"en"} />
        </div>
        <div className="w-full mb-4">
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
          <Link href={`tel: +359 877757765`} target="_blanc" rel="noopener">
            <GenericButton variant="secondary" styleClass="w-full min-w-40">
              <div className="flex items-center justify-center size-6 m-0.5">
                <PhoneIcon />
              </div>
            </GenericButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
