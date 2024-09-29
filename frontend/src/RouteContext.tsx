import React, { createContext, useContext, useState, ReactNode } from "react";

type RouteContextType = {
  routeName: string;
  setRouteName: (name: string) => void;
};

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export const RouteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [routeName, setRouteName] = useState("");

  return (
    <RouteContext.Provider value={{ routeName, setRouteName }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRouteName = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error("useRouteName must be used within a RouteProvider");
  }
  return context;
};
