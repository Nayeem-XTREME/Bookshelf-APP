import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/User/Login/Login";
import Signup from "./components/User/Signup/Signup";
import AllUsers from "./components/User/AllUsers/AllUsers";
import Profile from "./components/User/Profile/Profile"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/users" component={AllUsers} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
