"use client";

import Link from "next/link";
import navItems from "../../data/navItems";
import { LogoFacebook, LogoGithub, LogoInstagram, LogoLinkedin } from "react-ionicons";

const Footer = () => {
  return (
    <footer className="border-t border-dark ">
      <div className="section py-5 flex items-center gap-3 xs:flex-row flex-col justify-between">
        <div className="space-x-5">
          {navItems.map((item) => (
            <Link href={item.url}>{item.name}</Link>
          ))}
        </div>

        <div className=" flex items-center justify-center  gap-3 ">
          <LogoLinkedin color={"#2c363f"} height="24px" width="24px" />
          <LogoFacebook color={"#2c363f"} height="24px" width="24px" />
          <LogoGithub color={"#2c363f"} height="24px" width="24px" />
          <LogoInstagram color={"#2c363f"} height="24px" width="24px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
