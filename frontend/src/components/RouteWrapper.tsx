import React from "react";
import { useRouteName } from "../RouteContext";

type RouteWrapperProps = {
  name: string;
  component: React.ReactNode;
};

const RouteWrapper: React.FC<RouteWrapperProps> = ({ name, component }) => {
  const { setRouteName } = useRouteName();

  React.useEffect(() => {
    setRouteName(name);
  }, [name, setRouteName]);

  return <>{component}</>;
};

export default RouteWrapper;
