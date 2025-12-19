"use client";

import GenericButton from "../Generic/GenericButton";

const ContactButton = ({ text }: { text: string }) => {
  return (
    <GenericButton
      ariaLabel={"Отиди до контактна форма"}
      click={() => {
        const target = document.querySelector("#contact");

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
    >
      <p className="text-primaryDarkBlue font-bold text-xl">{text}</p>
    </GenericButton>
  );
};

export default ContactButton;
