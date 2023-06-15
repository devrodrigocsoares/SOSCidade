import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";
import Login from "./pages/Login";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/create-point" exact component={CreatePoint} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
};

export default Routes;
