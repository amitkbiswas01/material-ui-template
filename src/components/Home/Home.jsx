import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TopBar from "./TopBar";
import Hero from "./Hero";
import Navigation from "../Navigation/Navigation";
import NotFound from "../404/404";
import Services from "../Services/Services";
import About from "../About/About";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}
