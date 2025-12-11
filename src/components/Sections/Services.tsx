"use client";

import { Locale } from "@/types";
import { WebsiteScene } from "../3dModel";
import { ServicesContent } from "../Custom";

const Services = ({ locale }: { locale: Locale }) => {
  return (
    <section className="w-full flex pb-10 md:pb-20 scroll-mt-20" id="services">
      <div className="h-full content_wrapper my-auto w-full flex">
        <div className="flex flex-1">
          <div className="w-full h-full">
            <WebsiteScene />
          </div>
        </div>
        <ServicesContent locale={locale} />
      </div>
    </section>
  );
};

export default Services;
