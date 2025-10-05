import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");

  function getData() {
    axios.get('https://68e14bde8943bf6bb3c3d8bb.mockapi.io/crud-suku')
      .then((response) => {
        setData(response.data);
      });
  }

  function handleDelete(id) {
    axios.delete(`https://68e14bde8943bf6bb3c3d8bb.mockapi.io/crud-suku/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []); // ✅ only once

return (
  <div>
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" onClick={() => { if (tableDark === "table-dark") { setTableDark(""); } else { setTableDark("table-dark"); } }} />
    </div>
    <div className="container mt-4">
      <div className="d-flex justify-content-between m-2">
        <h2 className="mb-3">Read Operations</h2>
        <Link to="/">
          <button className='btn btn-secondary'>Create</button>
        </Link>
      </div>
      <table className={`table table-bordered mt-3 ${tableDark}`}>
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      setToLocalStorage(eachData.id, eachData.name, eachData.email)
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Read;
