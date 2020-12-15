import React, { Component } from "react";
import styles from "./AllUser.module.css";
import axios from "../../../axios-base";

import Navbar from "../../Navbar/Navbar";

export default class AllUsers extends Component {
  state = {
    users: [],
    available: false,
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get("/users");
      this.setState({ users: res.data, available: true });

      console.log(this.state.users);
    } catch (error) {
      console.log(error);
    }
  };

  showAllUsers = () => {
    if (this.state.available === true) {
      const data = this.state.users;
      return data.map((x) => {
        return (
          <tr key={x._id}>
            <td>{x.name}</td>
            <td>{x.phone}</td>
            <td>{x.email}</td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar btn="Log in" route="/login" />
        <div className="container">
          <div className={styles.box}>
            <h2>All Users</h2>
            <br />
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>{this.showAllUsers()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
