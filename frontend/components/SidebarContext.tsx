"use client";

import { createContext, useState } from "react";

export const SideBarContext = createContext();

export function SideBarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(0);

  return (
    <SideBarContext.Provider value={{ expanded, setExpanded, active, setActive }}>
      {children}
    </SideBarContext.Provider>
  );
}