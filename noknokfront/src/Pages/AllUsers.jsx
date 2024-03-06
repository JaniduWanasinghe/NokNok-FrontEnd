import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAdmin from '../hooks/useAdmin';
import newRequest from '../utils/newRequest';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
useAdmin();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await newRequest.get('/auth/all');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  const toggleUserStatus = async (userId) => {
    try {
      await newRequest.put(`/auth/toggleUserStatus/${userId}`);
      window.location.reload();

      // Update the local state or refetch users after toggling status
    } catch (error) {
      console.error('Error toggling user status', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                    user.enable==="true" ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}
                >
                  {user.enable==="true" ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded-full"
                  onClick={() => toggleUserStatus(user._id)}
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsersPage;
