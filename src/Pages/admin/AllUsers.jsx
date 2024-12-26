import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {

const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  console.log(users);
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
        setLoading(false); 
      } catch (err) {
        setError(err.message || "Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
    
    return (
        <div>
        <h1 className="text-3xl font-bold mb-5">User List</h1>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user._id} className="mb-2">
                <span className="font-semibold">Name:</span> {user.name} | <span className="font-semibold">Email:</span> {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
    );
};

export default AllUsers;