import React, { useState } from 'react'

function Course(props) {
    const [likes,setLikes]=useState(props.coursedetails.likes);
    function incrementLikes(){
        setLikes(likes+1);
    }
    function renderStars(){
        const rating = props.coursedetails.rating;
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
    return (
        <div className="col-md-3 my-1">
            <div className="card">
                <img src={props.coursedetails.imageUrl} className="card-img-top" alt="..." style={{ height: "200px" }} />
                <div className="card-body">
                    <h1>{props.coursedetails.title}</h1>
                    <p> <i className="fa-solid fa-indian-rupee-sign"></i> {props.coursedetails.price}</p>
                    <p>Rating: {renderStars()} </p>
                    <button className="btn btn-outline-primary" onClick={incrementLikes}><i className="fa-solid fa-thumbs-up"></i> {likes}</button>
                </div>
            </div>
        </div>
    );
}

export default Course