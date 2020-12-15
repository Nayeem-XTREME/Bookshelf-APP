import React, { Component } from "react";
import axios from "../../../axios-base";
import styles from "./Signup.module.css";

import Navbar from "../../Navbar/Navbar";

export default class Signup extends Component {
  state = {
    name: "",
    age: "",
    phone: "",
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

    axios.post("/users/signup", this.state)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navbar btn="Log in" route="/login" />

        <div className="container">
          <div className={styles.box}>
            <h2>Sign up</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      name="name"
                      type="name"
                      className="form-control"
                      placeholder="Enter your name"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      name="age"
                      type="age"
                      className="form-control"
                      placeholder="Enter your age"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      name="phone"
                      type="phone"
                      className="form-control"
                      placeholder="Enter phone number"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
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
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
