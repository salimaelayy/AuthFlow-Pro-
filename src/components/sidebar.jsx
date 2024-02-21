// Sidebar.jsx
import React from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri';
import logo from '../assets/AuthFlow-Pro-full-logo.png'
const Sidebar = () => {
  return (
    <div className="bg-greywhite text-white w-1/5 py-8 px-4 flex flex-col justify-between">
      {/* Logo */}
      <div className="text-center mb-6">
        <img src={logo} alt="Logo" className="w-25 h-16 mx-auto mb-4" />
        <h1 className="text-xl font-bold text-turquois">Your Logo Name</h1>
      </div>

      {/* Navigation Links */}
      <ul>
        <li className="mb-4"><a href="#" className="hover:text-gray-300">Users</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-300">Add User</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-300">Edit User</a></li>
      </ul>

      {/* Logout Button */}
      <button className="flex items-center text-gray-400 hover:text-white" onClick={()=>localStorage.removeItem('userInfo')}>
        <RiLogoutBoxLine className="mr-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
