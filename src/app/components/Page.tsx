"use client";
import { NavbarContext } from "@/context/NavbarContext";
import { cm } from "@/lib/utils";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export interface Page {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Page({ id, children, className }: Page) {
  const setCurrentPage = useContext(NavbarContext);
  const { ref, inView } = useInView({
    threshold: [0.1, 0.3, 0.5, 1],
  });

  useEffect(() => {
    if (inView) {
      setCurrentPage(id);
    }
  }, [id, inView, setCurrentPage]);

  return (
    <div id={id} ref={ref} className={cm(className)}>
      {children}
    </div>
  );
}
