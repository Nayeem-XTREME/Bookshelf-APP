import React, { Component } from "react";
import styles from "./AddBook.module.css";
import Navbar from "../../Navbar/Navbar";
import axios from '../../../axios-base'

class AddBook extends Component {
  state = {
    name: "",
    author: "",
    publication: "",
    year: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state, localStorage.token);
    try {
        const res = await axios.post('/books', this.state, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(res.data);
        this.props.history.push('/profile');
    } catch (error) {
        console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className={styles.box}>
            <h2>ADD A BOOK</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Book name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter book name"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Author</label>
                    <input
                      name="author"
                      type="text"
                      className="form-control"
                      placeholder="Enter author name"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Publication</label>
                    <input
                      name="publication"
                      type="text"
                      className="form-control"
                      placeholder="Publication"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Year of publication</label>
                    <input
                      name="year"
                      type="text"
                      className="form-control"
                      placeholder="Year of publication"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={styles.submit}>
                <button type="submit" className="btn btn-primary">
                  ADD BOOK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBook;
