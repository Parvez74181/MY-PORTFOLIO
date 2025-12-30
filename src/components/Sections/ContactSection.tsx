"use client";

import { Button } from "@heroui/react";

const ContactSection = () => {
  return (
    <>
      <section className="section flex items-center justify-center min-h-[40vh] md:min-h-[60vh] flex-col gap-5">
        <h2 className="uppercase font-semibold lg:text-7xl md:text-5xl xs:text-4xl text-3xl text-center">
          keep in touch with me.
        </h2>
        <h2 className="uppercase font-semibold lg:text-7xl md:text-5xl xs:text-4xl text-3xl text-center">say hi</h2>
        <Button
          radius="none"
          className="bg-dark text-bg uppercase text-lg px-5 py-3.5 xs:text-2xl sm:text-4xl sm:py-7 sm:px-10"
        >
          start a conversation
        </Button>
      </section>
    </>
  );
};

export default ContactSection;
