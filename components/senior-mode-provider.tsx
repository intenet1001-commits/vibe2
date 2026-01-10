"use client";

import { createContext, useContext, useState, useEffect } from "react";

type SeniorModeContextType = {
  seniorMode: boolean;
  toggleSeniorMode: () => void;
};

const SeniorModeContext = createContext<SeniorModeContextType | undefined>(undefined);

export function SeniorModeProvider({ children }: { children: React.ReactNode }) {
  const [seniorMode, setSeniorMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("seniorMode");
    if (saved === "true") {
      setSeniorMode(true);
    }
  }, []);

  useEffect(() => {
    if (seniorMode) {
      document.documentElement.classList.add("senior-mode");
      localStorage.setItem("seniorMode", "true");
    } else {
      document.documentElement.classList.remove("senior-mode");
      localStorage.setItem("seniorMode", "false");
    }
  }, [seniorMode]);

  const toggleSeniorMode = () => setSeniorMode((prev) => !prev);

  return (
    <SeniorModeContext.Provider value={{ seniorMode, toggleSeniorMode }}>
      {children}
    </SeniorModeContext.Provider>
  );
}

export function useSeniorMode() {
  const context = useContext(SeniorModeContext);
  if (!context) {
    throw new Error("useSeniorMode must be used within a SeniorModeProvider");
  }
  return context;
}
