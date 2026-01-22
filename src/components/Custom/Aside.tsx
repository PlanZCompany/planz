"use client";

import {
  MessageIcon,
  PhoneIcon,
  ViberIcon,
  WhatsAppIcon,
  XIcon,
} from "@/assets/icons";
import { useState } from "react";
import { QUICK_CONNECTIONS } from "../../../content/data/quick-connections";
import Link from "next/link";

const Aside = () => {
  const [connectionsOpen, setConnectionsOpen] = useState(false);
  const phones = ["+359 877757765", "+359 887933423"];

  const connectionsContent = QUICK_CONNECTIONS.map((connection, index) => {
    let connectionIcon = <PhoneIcon />;

    if (connection.icon === "phone") {
      connectionIcon = <PhoneIcon />;
    }

    if (connection.icon === "whatsapp") {
      connectionIcon = <WhatsAppIcon />;
    }

    if (connection.icon === "viber") {
      connectionIcon = <ViberIcon />;
    }

    return (
      <li
        key={`${connection}-${index}`}
        className={`cursor-pointer rounded-full size-10 flex justify-center items-center relative ${connection.backgroundColor}`}
      >
        <Link
          className="absolute left-0 top-0 bottom-0 w-[50%]"
          href={`tel:${phones[0]}`}
          target="_blanc"
          rel="noopener"
        ></Link>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-7 h-7 md:w-6 md:h-6 flex justify-center items-center">
            {connectionIcon}
          </div>
        </div>
        <Link
          className="absolute right-0 top-0 bottom-0 w-[50%]"
          href={`tel:${phones[1]}`}
          target="_blanc"
          rel="noopener"
        ></Link>
      </li>
    );
  });

  return (
    <aside className="fixed bottom-2 right-2 z-20">
      <button
        className="cursor-pointer rounded-full size-10 flex justify-center items-center bg-primaryDarkGreen"
        onClick={() => setConnectionsOpen(!connectionsOpen)}
      >
        <div className="w-8 h-8 flex justify-center items-center">
          {!connectionsOpen ? <MessageIcon /> : <XIcon />}
        </div>
      </button>

      <ul
        className={`absolute bottom-0 flex flex-col gap-2 z-[-1] ${
          connectionsOpen
            ? "scale-y-100 -translate-y-12"
            : "scale-y-0 translate-y-0"
        } transition-transform duration-500 ease-in-out origin-bottom`}
      >
        {connectionsContent}
      </ul>
    </aside>
  );
};

export default Aside;
