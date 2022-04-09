import React, { lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

/****site route*****/
import Header from "./layout/header";
import Footer from "./layout/footer";
//  Home page
const Home = lazy(() => import("./pages/Dashboard"));
const Landing = lazy(() => import("./pages/Landing"));
const Underconstruction = lazy(() => import("./pages/Underconstruction"));
const Presale = lazy(() => import("./pages/Presale"));
const Breaker = lazy(() => import("./pages/breaker"));
const Circuit = lazy(() => import("./pages/circuit"));
const Loop = lazy(() => import("./pages/loop"));

const AppRouter = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      {(location.pathname === '/presale' || location.pathname === '/breaker' || location.pathname === '/loop' || location.pathname === '/circuit') && <Header />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/under" component={Underconstruction} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/presale" component={Presale} />
        <Route exact path="/breaker" component={Breaker} />
        <Route exact path="/circuit" component={Circuit} />
        <Route exact path="/loop" component={Loop} />
      </Switch>
      {(location.pathname === '/presale') && <Footer />}
    </React.Fragment>
  );
};

export default AppRouter;
