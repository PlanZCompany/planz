import GenericHeading from "../Generic/GenericHeading";
import { getHero } from "../../../content/data/hero";
import GenericButton from "../Generic/GenericButton";
import { PhoneIcon } from "@/assets/icons";
import { Locale } from "@/types";

const Hero = ({ locale }: { locale: Locale }) => {
  const hero = getHero(locale);
  return (
    <div className="m-auto relative z-6 flex flex-col justify-center items-center gap-4 w-full content_wrapper">
      <div className="w-full">
        <GenericHeading
          headingType="h1"
          align="text-center"
          fontStyle={locale === "en" ? "font-clash font-bold" : "font-sansation font-bold"}
        >
          {hero.title}
        </GenericHeading>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-m">
        <GenericButton>
          <p className="text-primaryDarkBlue font-bold text-xl">{hero.button}</p>
        </GenericButton>
        <GenericButton variant="secondary" styleClass="w-full min-w-40">
          <div className="flex items-center justify-center size-6 m-0.5">
            <PhoneIcon />
          </div>
        </GenericButton>
      </div>
    </div>
  );
};

export default Hero;
