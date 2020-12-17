import React, { Component } from "react";
import styles from "./AddBook.module.css";
import Navbar from "../../Navbar/Navbar";
import axios from '../../../axios-base'

class AddBook extends Component {
  state = {
    book: {
      name: "",
      author: "",
      publication: "",
      year: ""
    },
    alertBox: (
      <div></div>
    )
  };

  handleChange = (e) => {
    const { book } = this.state;  
    const currentState = book;
    const { name, value } = e.target; 
    currentState[name] = value;
    
    this.setState({ book: currentState });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('/books', this.state.book, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
        this.props.history.push('/profile');
    } catch (error) {
        console.log(error);
        this.setState({
          alertBox: (
            <div className="alert alert-danger" role="alert">
              Failed to add new book
            </div>
          )
        })
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

              <div className="row">
                <div className="col-12">
                  {this.state.alertBox}
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
