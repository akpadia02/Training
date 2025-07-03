import React, { Component } from "react";

export default class Course extends Component {
  state={curLikes:this.props.coursedetails.likes};
  // renderStars = () => {
  //   const rating = this.props.coursedetails.rating;
  //   const stars = [];
  //   for (let i=0;i<rating;i++) {
  //     stars.push(
  //       <i key={i} className="fa-solid fa-star" style={{ color: "Dodgerblue" }}></i>
  //     );
  //   }
  //   return stars;
  // };

  incrementLikes(){
    console.log("clicked");
    // this.props.coursedetails.likes++;// props are readonly (ie need states to reflect ui)
    //this.state.curLikes++; //states are immutable
    this.setState({curLikes:this.state.curLikes+1});
  }
  renderStars = () => {
    const rating = this.props.coursedetails.rating;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const totalStars = 5;

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="fa-solid fa-star" style={{ color: "Dodgerblue" }}></i>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <i
          key="half"
          className="fa-solid fa-star-half-stroke"
          style={{ color: "Dodgerblue" }}
        ></i>
      );
    }

    // Empty stars
    const remaining = totalStars - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remaining; i++) {
      stars.push(
        <i
          key={`empty-${i}`}
          className="fa-regular fa-star"
          style={{ color: "Dodgerblue" }}
        ></i>
      );
    }

    return stars;
  };

  render() {
    return (
        <div className="col-md-3 my-1">
      <div className="card">
        <img src={this.props.coursedetails.imageUrl} className="card-img-top" alt="..."  style={{height: "200px"}}/>
        <div className="card-body">
            <h1>{this.props.coursedetails.title}</h1>
            <p> <i className="fa-solid fa-indian-rupee-sign"></i> {this.props.coursedetails.price}</p>
            <p>Rating: {this.renderStars()} </p>
            <button className="btn btn-outline-primary" onClick={()=>this.incrementLikes()}><i className="fa-solid fa-thumbs-up"></i> {this.state.curLikes}</button>
        </div>
      </div>
      </div>
    );
  }
}