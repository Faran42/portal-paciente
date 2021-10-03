import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import { Login } from "./views/Login";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
}

export default Routes;
