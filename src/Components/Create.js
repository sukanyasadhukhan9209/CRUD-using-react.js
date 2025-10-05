import React, { useState } from 'react';
import axios from 'axios'; // ✅ import axios
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useNavigate();
    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ prevent form reload
        console.log("Form submitted with Name:", name, "and Email:", email);

        axios.post('https://68e14bde8943bf6bb3c3d8bb.mockapi.io/crud-suku', 
            { name, email },
            { headers: header } // ✅ correct axios syntax
        )
        .then((response) => {
            console.log("Data saved successfully:", response.data);
            alert("Data added successfully!");
            setName('');
            setEmail('');
            history('/read');
        })
        .catch((error) => {
            console.error("Error saving data:", error);
            alert("Failed to add data.");
        });
        // .then(() => {
        //     history('/read'); // ✅ navigate to /read after submission
        // });
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between m-2">
            <h2 className="mb-3">Create</h2>
            <Link to="/read">
            <button className='btn btn-secondary'>Show Data</button>
            </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your name"
                        value={name}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>

                {/* ✅ use correct function name */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {name && email && (
                <div className="mt-3">
                    <h5>Preview:</h5>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
            )}
        </div>
    );
};

export default Create;
