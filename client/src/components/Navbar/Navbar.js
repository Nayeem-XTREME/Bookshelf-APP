import React from "react";
import { useHistory } from 'react-router-dom'
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../store/actions/_action"

const Navbar = (props) => {

  let history = useHistory();
  
  const handleLogout = () => {
    props.logout()
      .then(success => {
        if (success) history.push('/');
        else alert('Failed to logout');
      })
  }
  
  let navElement, btn = props.btn, route = props.route;
  
  if (!props.btn && !props.btn) {
    btn = "Log in";
    route = "/login"
  }

  if (props.user.email === null) {
    navElement = (
      <div>
        <NavLink className="btn btn-primary m-2" to={route}>{btn}</NavLink>
        <NavLink className="btn btn-outline-info m-2" to="/users">All users</NavLink>
        <NavLink className="btn btn-outline-success m-2" to="/books">All books</NavLink>
      </div>
    );
  }

  if (props.user.email !== null) {
    navElement = (
      <div>
        <button className="btn">Hello <strong>{props.user.name}</strong>!</button>
        <button onClick={handleLogout} className="btn btn-danger m-2">Log out</button>
      </div>
    )
  }

  return (
    <nav className="shadow navbar navbar-expand fixed-top navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Bookshelf-App</NavLink>
        <div className="navbar-nav ml-auto">{navElement}</div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
