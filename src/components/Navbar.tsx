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
import { useState } from "react";
import useContactButtonClicked from "@/store/contactButtonClickedState";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setClicked = useContactButtonClicked((state) => state.setClicked);
  return (
    <>
      <HerouiNavbar
        position="sticky"
        shouldHideOnScroll
        className="bg-transparent"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{ wrapper: "max-w-full! *:container *:mx-auto", base: "" }}
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden order-2 justify-end! items-end w-5!"
        />
        <NavbarBrand>
          <p className="font-bold text-2xl sm:text-4xl uppercase">parvez.</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <Button
              onPress={() => setClicked()}
              radius="none"
              variant="bordered"
              className="border-dark hover:bg-dark/15"
            >
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="space-y-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} onClick={() => setIsMenuOpen(false)}>
              <Link
                className="w-full"
                color={index === 2 ? "primary" : index === navItems.length - 1 ? "danger" : "foreground"}
                href={item.url}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              onPress={() => {
                setIsMenuOpen(false);
                setClicked();
              }}
              radius="none"
              variant="bordered"
              className="border-dark"
            >
              Contact
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </HerouiNavbar>
    </>
  );
};

export default Navbar;
