import React, { Component } from "react";
import axios from "../../../axios-base";
import styles from "./Login.module.css";

import Navbar from "../../Navbar/Navbar";

export default class Login extends Component {
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

    console.log(this.state);

    axios.post("/users/login", this.state)
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/profile');
      })
      .catch((err) => {
        console.log(err);
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
