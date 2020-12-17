import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Login from "./components/User/Login/Login";
import Signup from "./components/User/Signup/Signup";
import AllUsers from "./components/User/AllUsers/AllUsers";
import AllBooks from "./components/Book/AllBooks/AllBooks";
import Profile from "./components/User/Profile/Profile"
import AddBook from "./components/Book/AddBook/AddBook"
import EditBook from "./components/Book/EditBook/EdiBook"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/users" component={AllUsers} />
        <Route path="/books" component={AllBooks} />

        {/* Preventing unauthorized access */}
        {localStorage.getItem("token") ? <Route path="/profile" component={Profile} /> : <Redirect to="/login"/>}
        {localStorage.getItem("token") ? <Route path="/add" component={AddBook} /> : <Redirect to="/login"/>}
      
        <Route path="/edit" component={EditBook} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
