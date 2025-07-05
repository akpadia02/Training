import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditCourse() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    likes: 0,
    rating: '',
    imageUrl: '',
    description: '',
  });

  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/courses/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => alert("Course not found"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/courses/${id}`, formData);
      alert("Course updated successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to update course");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" className="form-control my-2" value={formData.title} onChange={handleChange} required />
        <input name="price" type="number" className="form-control my-2" value={formData.price} onChange={handleChange} required />
        <input name="likes" type="number" className="form-control my-2" value={formData.likes} onChange={handleChange} />
        <input name="rating" type="number" step="0.1" className="form-control my-2" value={formData.rating} onChange={handleChange} required />
        <input name="imageUrl" className="form-control my-2" value={formData.imageUrl} onChange={handleChange} required />
        <textarea name="description" className="form-control my-2" value={formData.description} onChange={handleChange} required />
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditCourse;
