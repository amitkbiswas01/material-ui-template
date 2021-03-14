import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TopBar from "./TopBar";
import Hero from "./Hero";
import Navigation from "../Navigation/Navigation";
import NotFound from "../404/404";
import Services from "../Services/Services";

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
        {/*
          <Route exact path="/products/create">
            <ProductCreate />
          </Route>
          <Route exact path="/products/update/:id">
            <ProductUpdate />
          </Route>
          <Route exact path="/products/:id">
            <ProductDetail />
          </Route> */}
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
