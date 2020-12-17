import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/User/Login/Login";
import Signup from "./components/User/Signup/Signup";
import AllUsers from "./components/User/AllUsers/AllUsers";
import AllBooks from "./components/Book/AllBooks/AllBooks";
import Profile from "./components/User/Profile/Profile"
import AddBook from "./components/Book/AddBook/AddBook"
import EditBook from "./components/Book/EditBook/EdiBook"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/users" component={AllUsers} />
        <Route path="/books" component={AllBooks} />
        <Route path="/profile" component={Profile} />
        <Route path="/add" component={AddBook} />
        <Route path="/edit" component={EditBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
