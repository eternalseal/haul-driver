import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Dashboard from "./dashboard/Dashboard";
import DriverWorkDay from "./dashboard/DriverWorkDay";


// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbar />
            <Component {...props} />
          
          </main>
        </>
      )}
    />
  );
};

export default () => (
  <Switch>
     <RouteWithSidebar
      exact
      path={Routes.Dashboard.path}
      component={DriverWorkDay}
    />
    <RouteWithSidebar
      exact
      path={Routes.DriverWorkDay.path}
      component={DriverWorkDay}
    />
  </Switch>
);
