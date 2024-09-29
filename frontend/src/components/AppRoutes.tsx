import React from "react";
import { Routes, Route } from "react-router-dom";
import SecurityList from "./SecurityList";
import SecurityDetail from "./SecurityDetail";
import RouteWrapper from "./RouteWrapper";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <RouteWrapper name="Security List" component={<SecurityList />} />
      }
    />
    <Route
      path="/securities"
      element={
        <RouteWrapper name="Security List" component={<SecurityList />} />
      }
    />
    <Route
      path="/securities/:securityId"
      element={
        <RouteWrapper name="Security Detail" component={<SecurityDetail />} />
      }
    />
  </Routes>
);

export default AppRoutes;
