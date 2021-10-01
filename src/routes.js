import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard";

function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
}

export default Routes;
