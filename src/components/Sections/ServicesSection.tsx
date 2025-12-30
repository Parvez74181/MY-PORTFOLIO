"use client";

import { Project } from "@/types";
import { Button, Divider, Accordion, AccordionItem } from "@heroui/react";
import { ArrowUpCircle } from "react-ionicons";
import Reveal from "../animation/Reveal";
import useContactButtonClicked from "@/store/contactButtonClickedState";

const ServicesSection = () => {
  const setClicked = useContactButtonClicked((state) => state.setClicked);
  return (
    <>
      <section className="bg-dark py-20 text-bg">
        <div className="section grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-start justify-between flex-col gap-5">
            <div>
              <Reveal type="left" delay={0.5}>
                <Divider className="w-44 bg-bg h-1.5 lg:h-3 mb-4" />
              </Reveal>
              <Reveal type="left" delay={0.25}>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl  uppercase font-semibold">
                  services i <br /> offer
                </h2>
              </Reveal>
              <Reveal type="left" delay={0.5}>
                <p className="mt-2 max-w-80">I’ll help you with finding a solution and solve your problem together.</p>
              </Reveal>
            </div>
            <Reveal type="left" delay={0.75}>
              <Button
                onPress={() => setClicked()}
                radius="full"
                className="bg-bg md:flex hidden text-dark uppercase font-semibold text-2xl md:text-4xl md:py-7 md:px-10 size-34!"
              >
                let's <br /> talk
              </Button>
            </Reveal>
          </div>
          <Reveal type="right" delay={0.5}>
            <div className="mt-8 ">
              <Accordion
                className="text-bg!"
                itemClasses={{
                  title: "text-bg! text-2xl lg:text-3xl font-normal",
                  trigger: "cursor-pointer",
                  indicator: "-rotate-90 *:size-5 data-[open=true]:rotate-90",
                }}
                defaultExpandedKeys={["1", "2", "3"]}
                selectionMode="multiple"
              >
                <AccordionItem
                  key="1"
                  aria-label="Web Design"
                  title="Web Design"
                  startContent={<h2 className="text-3xl lg:text-5xl font-semibold">01</h2>}
                  // indicator={<ArrowUpCircle color={"#f2f5ea"} height="36px" width="36px" />}
                >
                  I design modern, user-friendly websites that reflect your brand and provide an engaging user
                  experience.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Web Development"
                  title="Web Development"
                  startContent={<h2 className="text-2xl md:text-5xl font-semibold">02</h2>}
                  // indicator={<ArrowUpCircle color={"#f2f5ea"} height="36px" width="36px" />}
                >
                  I develop fast, secure, and scalable websites using modern technologies for long-term performance.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="WordPress Development"
                  title="WordPress Development"
                  startContent={<h2 className="text-2xl md:text-5xl font-semibold">03</h2>}
                  // indicator={<ArrowUpCircle color={"#f2f5ea"} height="36px" width="36px" />}
                >
                  I build custom WordPress websites that are easy to manage, SEO-friendly, and tailored to your business
                  needs.
                </AccordionItem>
              </Accordion>
            </div>
          </Reveal>

          <Reveal type="bottom">
            <Button
              radius="full"
              className="bg-bg md:hidden flex text-dark uppercase font-semibold text-2xl mt-10 size-30!"
            >
              let's <br /> talk
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
