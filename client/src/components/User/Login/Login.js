import React, { Component } from "react";
import styles from "./Login.module.css";

import { connect } from 'react-redux';
import { login } from '../../../store/actions/_action'

import Navbar from "../../Navbar/Navbar";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state)
      .then((success) => {
        if (success) this.props.history.push('/profile');
        else alert('Invalid email or password');
      });
  };

  render() {
    return (
      <div>
        <Navbar btn="Sign up" route="/signup" />

        <div className="container">
          <div className={styles.box}>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="row">

                <div className="col-12">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={styles.submit}>
                <button type="submit" className="btn btn-primary">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch( login(data) )
  }
}

export default connect(null, mapDispatchToProps)(Login);