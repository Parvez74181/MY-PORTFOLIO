"use client";

import Link from "next/link";
import navItems from "../../data/navItems";
import { LogoFacebook, LogoGithub, LogoInstagram, LogoLinkedin } from "react-ionicons";
import Reveal from "./animation/Reveal";

const Footer = () => {
  return (
    <footer className="border-t border-dark ">
      <div className="section py-5 flex items-center gap-3 xs:flex-row flex-col justify-between">
        <Reveal type="left">
          <div className="space-x-5">
            {navItems.map((item) => (
              <Link key={item.name} href={item.url}>
                {item.name}
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal type="right">
          <div className=" flex items-center justify-center  gap-3 ">
            <Link
              href={
                "https://www.linkedin.com/in/md-joy-parvez-8100a0203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
            >
              <LogoLinkedin color={"#2c363f"} height="24px" width="24px" />
            </Link>
            <Link href={"https://www.facebook.com/share/16g32KB4pJ/"} target="_blank">
              <LogoFacebook color={"#2c363f"} height="24px" width="24px" />
            </Link>

            <Link href={"https://github.com/Parvez74181"} target="_blank">
              <LogoGithub color={"#2c363f"} height="24px" width="24px" />
            </Link>
            <Link href={"https://www.instagram.com/md__.parvez?igsh=aGVyZjFuc3ZmNWYz"} target="_blank">
              <LogoInstagram color={"#2c363f"} height="24px" width="24px" />
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
