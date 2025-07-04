import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Rating from './Rating';

function Course(props) {
    const navigate = useNavigate();
    const goTo = () => {
        navigate("/coursedetails"); // navigates to /about
    };
    const [likes,setLikes]=useState(props.coursedetails.likes);
    function incrementLikes(){
        setLikes(likes+1);
    }
    return (
        <div className="col-md-3 my-1">
            <div className="card">
                <Link to={`/coursedetails/${props.coursedetails.id}`}><img src={props.coursedetails.imageUrl} className="card-img-top" alt="..." style={{ height: "200px" }} /></Link>
                {/* <img src={props.coursedetails.imageUrl} className="card-img-top" alt="..." style={{ height: "200px" }} onClick={goTo} /> */}
                <div className="card-body">
                    <h1>{props.coursedetails.title}</h1>
                    <p> <i className="fa-solid fa-indian-rupee-sign"></i> {props.coursedetails.price}</p>
                    <p>Rating: <Rating stars={props.coursedetails.rating}/></p>
                    <button className="btn btn-outline-primary" onClick={incrementLikes}><i className="fa-solid fa-thumbs-up"></i> {likes}</button>
                </div>
            </div>
        </div>
    );
}

export default Course