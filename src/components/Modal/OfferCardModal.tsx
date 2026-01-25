"use client";

import { Locale } from "@/types";
import PhoneTwoContacts from "../Custom/PhoneTwoContacts";
import GenericImage from "../Generic/GenericImage";
import { useEffect, useRef, useState } from "react";

const OfferCardModal = ({ locale }: { locale: Locale }) => {
  const [open, setOpen] = useState(false);
  const timeOut = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      console.log("open");
      setOpen(true);
    }, 3000);

    return () => {
      if (!!timeOut.current) clearTimeout(timeOut.current);
    };
  }, []);

  return (
    <>
      <div className="fixed left-2 bottom-2 z-10">
        <button
          className={`cursor-pointer rounded-full size-10 flex justify-center items-center relative bg-primaryDarkGreen`}
          onClick={() => setOpen(true)}
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-7 h-7 md:w-6 md:h-6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-percentage"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M6 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M6 18l12 -12" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div
        className={`inset-0 z-20 fixed bg-black/50 backdrop-blur-xl flex flex-col
        transition-opacity duration-500 ease-in-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute z-2 top-2 right-2 size-10 rounded-full border border-white flex justify-center items-center cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="flex-1 w-full content_wrapper p-4 md:p-10">
          <GenericImage
            src={`/static/offer-${locale}.png`}
            alt="offer"
            fill={true}
            wrapperClassName="w-full h-full relative portrait:hidden landscape:block"
            imageClassName="w-full h-full object-contain"
          />
          <GenericImage
            src={`/static/mobile-offer-${locale}.png`}
            alt="offer"
            fill={true}
            wrapperClassName="w-full h-full relative portrait:block landscape:hidden"
            imageClassName="w-full h-full object-contain"
          />
        </div>
        <div className="w-full max-w-[250px] mx-auto mb-4">
          <div className="flex flex-col md:flex-row items-center gap-m">
            <PhoneTwoContacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCardModal;
