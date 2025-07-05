import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from './Rating';

function CourseDetails() {
  const { id } = useParams(); //shoule be same as given in app.jsx while defining the router
  const [course, setCourse] = useState([]);
  useEffect(function () {
    //ajax
    axios.get(`http://localhost:3000/courses/${id}`).then(res => {
      setCourse(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <div className="container my-4">
          <div className="row">
            {/* Left Side: Image */}
            <div className="col-md-7">
              <img src={course.imageUrl} alt={course.title} className="img-fluid rounded" />
            </div>

            {/* Right Side: Text Content */}
            <div className="col-md-5">
              <h2>{course.title}</h2>
              <p><strong>Price:</strong> ₹{course.price}</p>
              <p><strong>Likes:</strong> {course.likes}</p>
              <p><strong>Rating:</strong> <Rating stars={course.rating}/></p>
              <p><strong>Description:</strong></p>
              <p>{course.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetails