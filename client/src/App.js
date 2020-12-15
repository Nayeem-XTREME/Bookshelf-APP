import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/User/Login/Login";
import Signup from "./components/User/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
