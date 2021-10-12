import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { HeroBanner } from "./components/hero-banner/hero-banner.component";
import { TrendingList } from "./components/trending-list/trending-list.component";

export const App = () => {
  return (
    <BrowserRouter>
      <HeroBanner />
      <div className="container-lg pt-5">
        <Switch>
          <Route path="/" exact component={TrendingList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
