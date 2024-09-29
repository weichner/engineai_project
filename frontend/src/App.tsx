import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RouteProvider } from "./RouteContext";
import MainLayout from "./components/MainLayout";
import AppRoutes from "./components/AppRoutes";

const App: React.FC = () => (
  <Router>
    <RouteProvider>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </RouteProvider>
  </Router>
);

export default App;
