import React, { useState, useEffect } from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri';
import axios from 'axios';
import Sidebar from '../components/sidebar';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const isAuthenticated = true;
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:3002/user',{withCredentials : true});
          console.log(response.data.data); 
          setUsers(response.data.data)
        } catch (error) {
          console.error('Error fetching users:', error);
          setError('Failed to fetch user data. Please try again later.');
        }
      };
  
      fetchUsers();
    }, []); 
  

  
  return (
    
    <div className="flex h-screen">
      
      <Sidebar/>
      {isAuthenticated ? (
        <div className="w-3/4 py-8 px-8">
        <h1 className="text-3xl font-bold mb-8">User Management Dashboard</h1>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">User List</h2>
          
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-200 px-4 py-2">ID</th>
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 px-4 py-2">{user._id}</td>
                  <td className="border border-gray-200 px-4 py-2">{user.username}</td>
                  <td className="border border-gray-200 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      ) : (
        <p>User is not authenticated!</p>
      )}
      
    </div>
  );
};
export default Dashboard;