import { createContext, Dispatch, SetStateAction } from "react";

export const NavbarContext = createContext<Dispatch<SetStateAction<string>>>(
  () => {}
);
