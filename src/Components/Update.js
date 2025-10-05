import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://68e14bde8943bf6bb3c3d8bb.mockapi.io/crud-suku/${id}`, {
      name: Name,
      email: Email
    })
    .then(() => {
      alert("User updated successfully!");
      navigate('/read');
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter your name"
            value={Name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
        <Link to="/read">
                <button type="button" className="btn btn-secondary">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
