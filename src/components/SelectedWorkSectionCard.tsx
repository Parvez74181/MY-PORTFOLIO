"use client";

import { Project } from "@/types";
import { Image } from "@heroui/react";
import NextImage from "next/image";
import Link from "next/link";
import { ArrowUpCircle } from "react-ionicons";

interface Props extends Project {
  rtl?: boolean;
}
const SelectedWorkSectionCard = ({ heading, subHeading, thumbnail, content, slug, rtl }: Props) => {
  return (
    <>
      <div className="flex w-auto lg:flex-row flex-col lg:items-center  lg:gap-10 border border-dark ">
        <Image
          as={NextImage}
          src={thumbnail}
          isBlurred
          removeWrapper
          alt="hero_bg"
          height={500}
          sizes="(max-width: 768px) 100vw, 500px"
          width={500}
          radius="none"
          className={`${
            rtl ? "lg:order-2" : "lg:order-1"
          } w-full h-[250px]! xs:h-[400px]! md:h-[450px]! lg:h-[500px]! aspect-square object-cover`}
        />
        <div className={`${rtl ? "lg:order-1 lg:ps-10" : "lg:order-2 pr-5"} p-5`}>
          <h4 className="font-medium text-sm sm:text-base">{subHeading}</h4>
          <h2 className="font-medium text-xl sm:text-3xl my-2.5 md:my-5">{heading}</h2>
          <p className="font-normal text-sm ">{content}</p>
          <Link
            href={`/project/${slug}`}
            className="flex group items-center gap-5 hover:underline sm:text-lg font-semibold mt-2.5 md:mt-5"
          >
            Know More
            <span className="rotate-45 group-hover:scale-110 transition">
              <ArrowUpCircle color={"#2c363f"} height="30px" width="30px" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SelectedWorkSectionCard;
