import React, { Component } from "react";
import styles from './Profile.module.css'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";

import Navbar from "../../Navbar/Navbar"
import axios from '../../../axios-base'
import Spinner from '../../Spinner/Spinner'

class Profile extends Component {

  state = {
    books: [],
    available: false
  }

  handleEdit = (data) => {
    this.props.history.push({
      pathname: "/edit",
      state: data
    })
  }

  handleRemove = async (id) => {
    try {
      const res = await axios.delete(`/books/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });

      this.setState({available: false});
      this.componentDidMount();
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount = async () => {
    try {
      const res = await axios.get('/users/books', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      this.setState({books: res.data, available: true});
    } catch (error) {
      console.log(error);
    }
  }

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
            <td><button onClick={() => this.handleEdit(x)} className="btn btn-info pl-3 pr-3 pt-1 pb-0"><ion-icon name="eye-outline"></ion-icon></button></td>
            <td><button onClick={() => this.handleRemove(x._id)} className="btn btn-danger pl-3 pr-3 pt-1 pb-0"><ion-icon name="trash-outline"></ion-icon></button></td>
          </tr>
        );
      });
    }
  };

  render() {

    let mainContent = (
      <div>
        <Navbar />
        <div>
          <div className={styles.box}>
            <h3>Welcome!</h3>
            <hr/>
            <div className="row">
              <div className="col">
                <h2>Your Book List</h2>
              </div>
              <div className="col">
                <div className={styles.book}>
                  <NavLink className="btn btn-success" to="/add">ADD NEW BOOK</NavLink>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Publication</th>
                    <th scope="col">Details</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>{this.showAllBooks()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )

    if (this.state.available === false) {
      mainContent = <Spinner/>
    }

    return (
      <div>
        {mainContent}
      </div>
    );
  }

}

export default connect()(Profile);