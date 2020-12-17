import React, { Component } from "react";
import styles from './EditBook.module.css'

import axios from '../../../axios-base'
import Navbar from "../../Navbar/Navbar";

export default class EdiBook extends Component {
  state = {
    book: {
      name: this.props.location.state.name,
      author: this.props.location.state.author,
      publication: this.props.location.state.publication,
      year: this.props.location.state.year
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
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.patch(`/books/${this.props.location.state._id}`, this.state.book, {
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
            Failed to update book
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className={styles.box}>
            <h2>View Book Details</h2>
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
                      value={this.state.book.name}
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
                      placeholder="Author"
                      value={this.state.book.author}
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
                      value={this.state.book.publication}
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
                      placeholder="Year"
                      value={this.state.book.year}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">{this.state.alertBox}</div>
              </div>

              <div className={styles.submit}>
                <button type="submit" className="btn btn-primary">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
