import React, { useState, useEffect } from 'react';
import axios from 'axios';

const nodeBackendUrl = process.env.REACT_APP_NODE_BACKEND_URL;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${nodeBackendUrl}/users/getAll`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
