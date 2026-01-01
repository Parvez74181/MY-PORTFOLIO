"use client";

import { Button, Divider, Image } from "@heroui/react";
import NextImage from "next/image";
import { LogoFacebook, LogoGithub, LogoInstagram, LogoLinkedin } from "react-ionicons";
import Reveal from "../animation/Reveal";
import useContactButtonClicked from "@/store/contactButtonClickedState";

const HeroSection = () => {
  const { setClicked } = useContactButtonClicked();

  return (
    <>
      <section className="section min-h-[90vh] flex items-center justify-center lg:flex-row flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2 relative w-full place-items-center lg:place-items-baseline gap-5">
          <div className="relative col-span-2 z-10">
            <Reveal type="left" delay={0.35}>
              <h4 className="flex items-center gap-2 mb-3 md:mb-6">
                <Divider className="w-12 md:w-16 bg-dark h-0.5" /> Hello
              </h4>
            </Reveal>

            <div className="absolute *:*:flex *:*:items-center *:*:justify-center *:*:flex-col *:*:gap-3 *:*:md:gap-5 left-0 md:top-14 ">
              <Reveal type="top" delay={1.25}>
                <LogoLinkedin color={"#2c363f"} height="24px" width="24px" />
                <LogoFacebook color={"#2c363f"} height="24px" width="24px" />
                <LogoGithub color={"#2c363f"} height="24px" width="24px" />
                <LogoInstagram color={"#2c363f"} height="24px" width="24px" />
              </Reveal>
            </div>

            <div className="uppercase ps-10 md:ps-20 font-semibold flex items-start flex-col gap-3 md:gap-5 lg:gap-8">
              <Reveal type="left" delay={0.5}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[112px] md:leading-15 lg:leading-20">
                  i’m parvez
                </h1>
              </Reveal>
              <Reveal type="left" delay={0.75}>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl ">a full-stack web developer.</h2>
              </Reveal>
              <Reveal type="left" delay={1}>
                <Button
                  onPress={() => setClicked()}
                  radius="none"
                  className="bg-dark text-bg uppercase text-2xl md:text-4xl md:py-7 md:px-10"
                >
                  let's talk
                </Button>
              </Reveal>
            </div>
          </div>

          <Image
            as={NextImage}
            src={"/hero_bg.png"}
            isBlurred
            removeWrapper
            sizes="50vw"
            alt="hero_bg"
            height={500}
            width={500}
            className="-scale-x-100 w-75 lg:w-125 h-auto!  md:absolute md:-top-20 md:right-0 z-0"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
