import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import ListaDePedidos from "./views/ListaDePedidos";
import Ofertas from "./views/Ofertas";
import { Login } from "./views/Login";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/meuspedidos" exact component={ListaDePedidos} />
      <Route path="/ofertas" exact component={Ofertas} />
    </Switch>
  );
}

export default Routes;
