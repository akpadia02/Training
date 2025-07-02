import React, { Component } from 'react'

export default class Courses extends Component {
  render() {
    return (
      <div>
        <h1>Title: {this.props.courseDetails.id} {this.props.courseDetails.title}</h1>
        <h2>Rating:  {this.props.courseDetails.rating} </h2>
        <h2>Price:  {this.props.courseDetails.price} </h2>
        <h2>Likes:  {this.props.courseDetails.likes} </h2>
      </div>
    )
  }
}
