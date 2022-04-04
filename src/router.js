import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

/****site route*****/
//  Home page
const Home = lazy(() => import("./pages/Dashboard"));
const Landing = lazy(() => import("./pages/Landing"));
const Underconstruction = lazy(() => import("./pages/Underconstruction"));

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/under" component={Underconstruction} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
