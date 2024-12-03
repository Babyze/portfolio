"use client";

import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { LuMoonStar, LuSunMoon } from "react-icons/lu";

export default function ThemeSwticher() {
  const { setTheme } = useTheme();

  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <Button
      isIconOnly
      onClick={() => changeTheme()}
      color="secondary"
      variant="bordered"
      className="text-secondary text-xl"
    >
      <LuMoonStar className="hidden dark:inline" />
      <LuSunMoon className="dark:hidden" />
    </Button>
  );
}
