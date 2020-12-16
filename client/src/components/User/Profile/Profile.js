import React, { Component } from "react";
import styles from './Profile.module.css'
import { connect } from 'react-redux'

import Navbar from "../../Navbar/Navbar"
import axios from '../../../axios-base'
import Spinner from '../../Spinner/Spinner'

class Profile extends Component {

  state = {
    books: [],
    available: false
  }

  handleEdit = (id) => {
    console.log(id);
  }

  handleRemove = async (id) => {
    console.log(id);
  }

  componentDidMount = async () => {
    try {
      const res = await axios.get('/users/books', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });
      this.setState({books: res.data, available: true});
      console.log(this.state.books);
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
            <td><button onClick={() => this.handleEdit(x._id)} className="btn btn-info pl-3 pr-3 pt-0 pb-0"><ion-icon name="eye-outline"></ion-icon></button></td>
            <td><button onClick={() => this.handleRemove(x._id)} className="btn btn-danger pl-3 pr-3 pt-0 pb-0"><ion-icon name="trash-outline"></ion-icon></button></td>
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
            <h2>Book List</h2>
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