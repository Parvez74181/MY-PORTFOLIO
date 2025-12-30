"use client";
import {
  Navbar as HerouiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import navItems from "../../data/navItems";

const Navbar = () => {
  return (
    <>
      <HerouiNavbar
        position="sticky"
        shouldHideOnScroll
        className="bg-transparent"
        isBordered
        classNames={{ wrapper: "max-w-full! *:container *:mx-auto", base: "" }}
      >
        <NavbarBrand>
          <p className="font-bold text-4xl uppercase">parvez.</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button radius="none" variant="bordered" className="border-dark">
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
      </HerouiNavbar>
    </>
  );
};

export default Navbar;
