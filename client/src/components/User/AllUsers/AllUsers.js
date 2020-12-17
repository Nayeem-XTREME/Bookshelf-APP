import React, { Component } from "react";
import styles from "./AllUser.module.css";
import axios from "../../../axios-base";

import Navbar from "../../Navbar/Navbar";
import Spinner from "../../Spinner/Spinner";

export default class AllUsers extends Component {
  state = {
    users: [],
    available: false,
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get("/users");
      this.setState({ users: res.data, available: true });
    } catch (error) {
      console.log(error);
    }
  };

  showAllUsers = () => {
    if (this.state.available === true) {
      const data = this.state.users;
      return data.map((x, i) => {
        return (
          <tr key={x._id}>
            <td>{i + 1}</td>
            <th>{x.name}</th>
            <td>{x.age}</td>
            <td>{x.phone}</td>
            <td>{x.email}</td>
          </tr>
        );
      });
    }
  };

  render() {
    let mainContent = (
      <div>
        <Navbar btn="Log in" route="/login" />
        <div>
          <div className={styles.box}>
            <h2>All Users</h2>
            <br />
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>{this.showAllUsers()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );

    if (this.state.available === false) {
      mainContent = <Spinner />;
    }

    return <div>{mainContent}</div>;
  }
}
