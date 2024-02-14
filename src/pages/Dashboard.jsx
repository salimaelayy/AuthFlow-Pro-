import React from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri';
    

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/5 py-8 px-4 flex flex-col justify-between">
        {/* Logo */}
        <div className="text-center mb-6">
          <img src="/path/to/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-xl font-bold">Your Logo Name</h1>
        </div>
        
        {/* Navigation Links */}
        <ul>
          <li className="mb-4"><a href="#" className="hover:text-gray-300">Users</a></li>
          <li className="mb-4"><a href="#" className="hover:text-gray-300">Add User</a></li>
          <li className="mb-4"><a href="#" className="hover:text-gray-300">Edit User</a></li>
        </ul>

        {/* Logout Button */}
        <button className="flex items-center text-gray-400 hover:text-white">
          <RiLogoutBoxLine className="mr-2" />
          Logout
        </button>
      </div>

     
      {/* Main Content */}
      <div className="w-3/4 py-8 px-8">
        <h1 className="text-3xl font-bold mb-8">User Management Dashboard</h1>

        {/* User List Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">User List</h2>
          {/* User Table Component */}
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
              {/* Loop through users and display in table rows */}
              <tr>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">John Doe</td>
                <td className="border border-gray-200 px-4 py-2">john@example.com</td>
                <td className="border border-gray-200 px-4 py-2">
                  {/* Add edit and delete buttons */}
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
    

export default Dashboard