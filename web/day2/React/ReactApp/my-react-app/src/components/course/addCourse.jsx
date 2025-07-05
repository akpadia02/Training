import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCourse() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    likes: 0,
    rating: '',
    imageUrl: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/courses", formData);
      alert("Course added successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error adding course:", err);
      alert("Failed to add course.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>ID</label>
          <input type="text" className="form-control" name="id" value={formData.id} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Price</label>
          <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Likes</label>
          <input type="number" className="form-control" name="likes" value={formData.likes} onChange={handleChange} />
        </div>
        <div className="form-group mb-3">
          <label>Rating</label>
          <input type="number" step="0.1" className="form-control" name="rating" value={formData.rating} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Image URL</label>
          <input type="text" className="form-control" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
