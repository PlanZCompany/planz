"use client";

import Link from "next/link";
import GenericButton from "../Generic/GenericButton";
import { PhoneIcon } from "@/assets/icons";

const PhoneTwoContacts = () => {
  const phones = ["+359 877757765", "+359 887933423"];

  return (
    <GenericButton variant="secondary" styleClass="w-full min-w-40 relative">
      <Link
        className="absolute left-0 top-0 bottom-0 w-[50%]"
        href={`tel:${phones[0]}`}
        target="_blanc"
        rel="noopener"
      ></Link>

      <div className="flex items-center justify-center size-6 m-0.5">
        <PhoneIcon />
      </div>

      <Link
        className="absolute right-0 top-0 bottom-0 w-[50%]"
        href={`tel:${phones[1]}`}
        target="_blanc"
        rel="noopener"
      ></Link>
    </GenericButton>
  );
};

export default PhoneTwoContacts;
