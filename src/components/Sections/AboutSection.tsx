"use client";
import { Divider, Image } from "@heroui/react";
import Reveal from "../animation/Reveal";
import NextImage from "next/image";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="w-full pt-24 px-6 md:px-12 lg:px-20 bg-background section">
        <div className="">
          <div className="mb-10">
            <Reveal type="left" delay={0.5}>
              <Divider className="w-28 md:w-44 bg-dark h-1.5 lg:h-3 mb-4" />
            </Reveal>
            <Reveal type="left" delay={0.25}>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl  uppercase font-semibold ">
                About <br /> Myself
              </h2>
            </Reveal>
            <Reveal type="left" delay={0.5}>
              <p className="mt-2 max-w-80">
                Full-Stack Web Developer with a passion for clean systems, design, and creative storytelling
              </p>
            </Reveal>

            <Image
              removeWrapper
              as={NextImage}
              src={"/me.jpg"}
              alt="parvez"
              width={1000}
              height={1000}
              className="grayscale-65 object-cover float-right sm:ms-6 my-5 sm:mb-0 sm:mt-12 h-auto! aspect-2/2.5 sm:w-80 md:w-100!"
            />
          </div>

          {/* Content */}
          <div className="space-y-7  text-base lg:text-justify md:text-lg leading-relaxed text-foreground">
            <p>
              I’m <span className="font-semibold">Parvez</span>, a{" "}
              <span className="font-semibold">Full-Stack Web Developer</span> with over{" "}
              <span className="font-semibold">4+ years of hands-on experience</span> building production-ready web
              applications for real clients and businesses. I focus on creating systems that are scalable, maintainable,
              and enjoyable to use.
            </p>

            <p>
              My core stack includes <span className="font-medium">Next.js, TypeScript, Django, and Node.js</span>. I’ve
              delivered solutions ranging from{" "}
              <span className="font-medium">education management platforms and ecommerce systems</span> to agency
              websites and CMS-driven business applications. I regularly work with complex features like authentication,
              role-based access, dynamic pricing, real-time carts, financial modules, and admin dashboards.
            </p>

            <p>
              I believe great software lives at the intersection of{" "}
              <span className="font-medium">engineering, design, and user behavior</span>. I pay close attention to
              performance, UI consistency, motion, accessibility, and responsiveness to ensure a smooth experience
              across all devices.
            </p>

            <p>
              Alongside development, I have a strong interest in design systems, typography, layout, and animation.
              Recently, I’ve started exploring <span className="font-medium">video editing and sound engineering</span>,
              and I’m fascinated by how sound design and timing influence mood and storytelling. While I’m still
              learning, the creative process has become something I truly enjoy.
            </p>

            <p>
              I’m also actively involved in <span className="font-medium">robotics and Arduino-based projects</span>,
              working with sensors, motors, and embedded systems. This hands-on experience has strengthened my
              problem-solving skills and ability to think beyond software alone.
            </p>

            <p>
              I consider myself a continuous learner who values clean code, thoughtful design, and meaningful impact.
              Whether building a complex platform or a simple interface, I approach every project with curiosity,
              attention to detail, and a strong sense of ownership.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
