import React, { Component } from "react";
import styles from "./AllBooks.module.css";
import axios from "../../../axios-base";

import Navbar from "../../Navbar/Navbar";
import Spinner from "../../Spinner/Spinner";

export default class AllBooks extends Component {
  state = {
    books: [],
    available: false,
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get("/books");
      this.setState({ books: res.data, available: true });

      console.log(this.state.books);
    } catch (error) {
      console.log(error);
    }
  };

  showAllBooks = () => {
    if (this.state.available === true) {
      const data = this.state.books;
      return data.map((x, i) => {
        return (
          <tr key={x._id}>
            <td>{i + 1}</td>
            <th>{x.name}</th>
            <td>{x.author}</td>
            <td>{x.publication}</td>
            <td>{x.year}</td>
            <td>{x.owner}</td>
          </tr>
        );
      });
    }
  };

  render() {
    let mainContent = (
      <div>
        <Navbar btn="Log in" route="/login" />
        <div className="container">
          <div className={styles.box}>
            <h2>All Books</h2>
            <br />
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Publication</th>
                  <th scope="col">Year</th>
                  <th scope="col">Owner ID</th>
                </tr>
              </thead>
              <tbody>{this.showAllBooks()}</tbody>
            </table>
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
