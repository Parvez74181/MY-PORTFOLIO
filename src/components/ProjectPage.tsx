"use client";

import { Divider, Image } from "@heroui/react";
import NextImage from "next/image";
import projects from "../../data/projects";
import Reveal from "./animation/Reveal";
import Link from "next/link";
import { ArrowUpOutline } from "react-ionicons";

const ProjectPage = ({ slug }: any) => {
  const project = projects.find((project) => project.slug === slug);

  return (
    <>
      <section className="project">
        <div className=" bg-violet/5">
          <div className="flex items-center justify-between lg:flex-row flex-col gap-5 section py-10 lg:py-20">
            <div className="space-y-3 lg:w-1/2 lg:order-1 order-2">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-medium flex items-center gap-1 text-violet">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M1.58315 6.76385L1.58411 6.76351L5.38191 5.38277L6.76239 1.58423L6.76275 1.58327C6.84262 1.36805 6.98643 1.18243 7.17487 1.05135C7.36332 0.920263 7.58736 0.85 7.8169 0.85C8.04644 0.85 8.27049 0.920263 8.45893 1.05135C8.64737 1.18243 8.79119 1.36805 8.87106 1.58327L8.87141 1.58423L10.2519 5.38277L14.0497 6.7635L14.0507 6.76386C14.2658 6.84375 14.4514 6.9876 14.5825 7.17607C14.7135 7.36454 14.7838 7.58861 14.7838 7.81818C14.7838 8.04775 14.7135 8.27182 14.5825 8.46029C14.4514 8.64877 14.2658 8.79261 14.0507 8.87251L14.0497 8.87285L10.2519 10.2542L8.87141 14.0521L8.87106 14.0531C8.79119 14.2683 8.64737 14.4539 8.45893 14.585C8.27049 14.7161 8.04644 14.7864 7.8169 14.7864C7.58736 14.7864 7.36332 14.7161 7.17488 14.585C6.98643 14.4539 6.84262 14.2683 6.76274 14.0531L6.7624 14.0522L5.38132 10.2536L1.5841 8.87286L1.58315 8.87251C1.36796 8.79261 1.18237 8.64877 1.05132 8.46029C0.92026 8.27182 0.850017 8.04775 0.850017 7.81818C0.850017 7.58861 0.92026 7.36454 1.05132 7.17607C1.18237 6.9876 1.36796 6.84375 1.58315 6.76385ZM6.09715 9.15742L6.0972 9.15744C6.18462 9.18927 6.26399 9.23986 6.32976 9.30564L6.22369 9.4117L6.32977 9.30564C6.39554 9.37143 6.44611 9.45082 6.47794 9.53823L6.47796 9.53829L7.8169 13.2208L9.15585 9.53829L9.15587 9.53823C9.18769 9.45082 9.23827 9.37143 9.30404 9.30564C9.36981 9.23986 9.44919 9.18927 9.5366 9.15744L9.53666 9.15742L13.2186 7.81818L9.53666 6.47895L9.5366 6.47893C9.44919 6.44709 9.36981 6.39651 9.30404 6.33072C9.23827 6.26494 9.18769 6.18555 9.15587 6.09813L9.15585 6.09807L7.8169 2.41555L6.47796 6.09807L6.47794 6.09813C6.44611 6.18555 6.39554 6.26494 6.32977 6.33072C6.26399 6.39651 6.18461 6.44709 6.09721 6.47893L6.09715 6.47895L2.41523 7.81818L6.09715 9.15742Z"
                      fill="#483FE9"
                      stroke="#483FE9"
                      strokeWidth="0.3"
                    ></path>
                  </svg>
                  Case Study
                </h4>

                <Link
                  className="text-violet font-medium hover:underline  flex items-center gap-1"
                  href={project?.url || ""}
                >
                  Live Demo{" "}
                  <span className="rotate-45">
                    <ArrowUpOutline color={"#483fe9"} height="20px" width="20px" />
                  </span>
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{project?.subHeading}</h3>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">{project?.heading}</h1>
            </div>
            <Image
              as={NextImage}
              alt={project?.slug}
              src={project?.thumbnail}
              width={10000}
              height={10000}
              removeWrapper
              sizes="50vw"
              className="w-full! md:w-150! aspect-video! h-auto! object-cover lg:order-2 order-1"
            />
          </div>
        </div>

        <div className="project-px py-20 space-y-14">
          <div id="about">
            <div className="flex items-center justify-center gap-1">
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />

              <h2 className="text-xl sm:text-3xl lg:text-4xl uppercase font-semibold text-center">About Project</h2>
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />
            </div>

            <div className="my-3" dangerouslySetInnerHTML={{ __html: project?.content || "" }} />
          </div>

          <div id="requirements">
            <div className="flex items-center justify-center gap-1">
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />

              <h2 className="text-xl sm:text-3xl lg:text-4xl uppercase font-semibold text-center">
                {" "}
                Project Requirements
              </h2>
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />
            </div>

            <div className="my-3" dangerouslySetInnerHTML={{ __html: project?.requirements || "" }} />
          </div>

          <div id="challenges">
            <div className="flex items-center justify-center gap-1">
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />

              <h2 className="text-xl sm:text-3xl lg:text-4xl uppercase font-semibold text-center">
                Project challenges
              </h2>
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />
            </div>

            <div className="my-3" dangerouslySetInnerHTML={{ __html: project?.challenges || "" }} />
          </div>

          <div id="solutions">
            <div className="flex items-center justify-center gap-1">
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />

              <h2 className="text-xl sm:text-3xl lg:text-4xl uppercase font-semibold text-center">Project solutions</h2>
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />
            </div>

            <div className="my-3" dangerouslySetInnerHTML={{ __html: project?.solutions || "" }} />
          </div>

          <div id="techUsed">
            <div className="flex items-center justify-center gap-1">
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />

              <h2 className="text-xl sm:text-3xl lg:text-4xl uppercase font-semibold text-center">tech Used</h2>
              <Divider className="w-10 md:w-20 bg-dark h-0.5 md:h-1 mb-2" />
            </div>

            <div className="my-3" dangerouslySetInnerHTML={{ __html: project?.techUsed || "" }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
