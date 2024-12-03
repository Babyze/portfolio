"use client";
import {
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { NavbarContext } from "../context/NavbarContext";
import { cm } from "../lib/utils";
import ThemeSwticher from "./ThemeSwitcher";
import Logo from "./ui/Logo";

interface MenuItem {
  id: string;
  name: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

type HighLight = Partial<React.MouseEvent<HTMLButtonElement, MouseEvent>> & {
  scroll?: boolean;
};

function Navbar({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);

  const MenuNavbarItem = ({
    menuItem,
    className,
    currentPage,
  }: {
    menuItem: MenuItem;
    currentPage: string;
    className?: string;
  }) => {
    const isActive = currentPage === menuItem.id;
    const activeClass = isActive && "border-b-2 border-secondary";

    return (
      <NavbarItem className={cm(activeClass, className)} isActive={isActive}>
        <Button
          color={isActive ? "secondary" : "primary"}
          size="lg"
          onClick={(e) => handleHighlight(e, menuItem.id)}
          className="hover:text-secondary bg-transparent"
        >
          {menuItem.name}
        </Button>
      </NavbarItem>
    );
  };

  const handleHighlight = (e: HighLight, pageId: string) => {
    setIsScrolling(true);
    const page = document.getElementById(pageId);
    if (page && e.scroll !== false) {
      page.scrollIntoView();
    }

    setCurrentPage(pageId);
    setIsScrolling(false);
  };

  useEffect(() => {
    if (currentPage && !isScrolling) {
      handleHighlight({ scroll: false }, currentPage);
    }
  }, [currentPage, isScrolling]);

  return (
    <>
      <NextUINavbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="fixed h-20"
      >
        <NavbarContent>
          <NavbarBrand className="pt-2">
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop navbar */}
        <NavbarContent className="hidden lg:flex items-center" justify="end">
          {menuItems.map((item) => {
            return (
              <MenuNavbarItem
                key={item.id}
                menuItem={item}
                currentPage={currentPage}
              />
            );
          })}
          <NavbarItem>
            <ThemeSwticher />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile navbar */}
        <NavbarContent className="lg:hidden" justify="end">
          <NavbarItem>
            <ThemeSwticher />
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item) => {
            return (
              <MenuNavbarItem
                key={item.id}
                menuItem={item}
                currentPage={currentPage}
              />
            );
          })}
        </NavbarMenu>
      </NextUINavbar>

      <NavbarContext.Provider value={setCurrentPage}>
        {children}
      </NavbarContext.Provider>
    </>
  );
}

export default Navbar;
