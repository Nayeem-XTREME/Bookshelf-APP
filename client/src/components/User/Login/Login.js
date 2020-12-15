import React from "react";
import styles from "./Login.module.css";

import Navbar from "../../Navbar/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar btn="Sign up" route="/signup" />
      
      <div className="container">
        <div className={styles.box}>
          <h2>Login</h2>
          <form>
            <div className="row">
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
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
