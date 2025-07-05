import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';

function Course(props) {
    const navigate = useNavigate();
    const goTo = () => {
        navigate("/coursedetails"); // navigates to /about
    };
    const [likes, setLikes] = useState(props.coursedetails.likes);
    function incrementLikes() {
        setLikes(likes + 1);
    }
    const editCourse = () => {
        navigate(`/editcourse/${props.coursedetails.id}`); // navigate using custom "id"
    };
    const deleteCourse = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this course?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:3000/courses/${props.coursedetails._id}`);
            alert("Course deleted successfully!");
            if (props.onDelete) {
                props.onDelete(props.coursedetails._id); // Notify parent to update UI
            }
        } catch (error) {
            console.error("Error deleting course:", error);
            alert("Failed to delete course.");
        }
    };
    return (
        <div className="col-md-3 my-1">
            <div className="card">
                <Link to={`/coursedetails/${props.coursedetails.id}`}><img src={props.coursedetails.imageUrl} className="card-img-top" alt="..." style={{ height: "200px" }} /></Link>
                {/* <img src={props.coursedetails.imageUrl} className="card-img-top" alt="..." style={{ height: "200px" }} onClick={goTo} /> */}
                <div className="card-body">
                    <h1>{props.coursedetails.title}</h1>
                    <p> <i className="fa-solid fa-indian-rupee-sign"></i> {props.coursedetails.price}</p>
                    <p>Rating: <Rating stars={props.coursedetails.rating} /></p>
                    <button className="btn btn-outline-primary" onClick={incrementLikes}><i className="fa-solid fa-thumbs-up"></i> {likes}</button>{" "}
                    <button className='btn btn-danger mx-1' onClick={deleteCourse}><i class="fa-solid fa-trash"></i></button>
                    <button className="btn btn-primary" onClick={editCourse}>
                       <i class="fa-solid fa-pen"></i>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Course