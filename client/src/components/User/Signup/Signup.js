import React from "react";
import styles from "./Signup.module.css";

import Navbar from "../../Navbar/Navbar";

export default function Signup() {

  return (
    <div>
      <Navbar btn="Log in" route="/login" />

      <div className="container">
        <div className={styles.box}>
          <h2>Sign up</h2>
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label for="phone">Phone</label>
                  <input
                    type="phone"
                    className="form-control"
                    id="phone"
                    aria-describedby="phone"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
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
