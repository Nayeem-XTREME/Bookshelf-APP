import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="shadow navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Bookshelf-App</NavLink>
        
        <div className="navbar-nav ml-auto">
            <NavLink className="btn btn-primary m-2" to={props.route}>{props.btn}</NavLink>
            <NavLink className="btn btn-outline-success m-2" to="/books">Get all books</NavLink>
            <NavLink className="btn btn-outline-info m-2" to="/users">Get all users</NavLink>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
