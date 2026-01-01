"use client";

import { Button, Divider } from "@heroui/react";
import projects from "../../../data/projects";
import SelectedWorkSectionCard from "../SelectedWorkSectionCard";
import Reveal from "../animation/Reveal";

const SelectedWorkSection = () => {
  return (
    <>
      <section className="section py-20 " id="work">
        <div>
          <Reveal type="left" delay={0.4}>
            <Divider className="w-28 md:w-44 bg-dark h-1.5 lg:h-3 mb-4" />
          </Reveal>

          <Reveal type="left" delay={0.5}>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl  uppercase font-semibold">
              selected <br /> works
            </h2>
          </Reveal>
          <Reveal type="left" delay={0.75}>
            <p className="mt-2 max-w-80">Take a look of some of my projects i have done.</p>
          </Reveal>
        </div>

        <div className="md:my-20 mt-10 md:space-y-20 space-y-10">
          {projects.map((project, i) => (
            <SelectedWorkSectionCard key={project.id} rtl={!((i + 1) % 2)} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SelectedWorkSection;
