"use client";

import { useTheme } from "next-themes";
import { GoRocket } from "react-icons/go";
import { TbRocketOff } from "react-icons/tb";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      expand={true}
      toastOptions={{
        classNames: {
          success: "bg-secondary text-white text-md border-secondary",
          error: "bg-danger-foreground border-danger-foreground text-danger text-md",
        },
      }}
      icons={{
        success: <GoRocket className="text-xl" />,
        error: <TbRocketOff className="text-xl" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
