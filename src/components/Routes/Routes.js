import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../common/Home";
import Login from "../auth/Login";
import AddVehicle from "../common/Vehicle/AddVehicle";
import NotFound from "../common/NotFound";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import ViewAllVehicles from "../common/Vehicle/ViewAllVehicles";
import ViewVehicle from "../common/Vehicle/ViewVehicle";
import Update from "../common/Vehicle/Update";

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/addVehicle" component={AddVehicle} />
        <ProtectedRoute
          path="/ViewAllVehicles"
          exact
          component={props => <ViewAllVehicles {...props} />}
        />
        <ProtectedRoute
          path="/ViewAllVehicles/:id"
          exact
          component={props => <ViewVehicle {...props} />}
        />
        <ProtectedRoute
          path="/ViewAllVehicles/:id/update"
          component={props => <Update {...props} />}
        />
        <ProtectedRoute component={NotFound} />
      </Switch>
    </Router>
  );
}
