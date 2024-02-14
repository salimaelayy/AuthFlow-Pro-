import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/AuthFlow-Pro-full-logo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap shadow bg-greywhite p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="logo" className="h-14 w-auto" /> 
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
        <div className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-end">
          
          <Link to="/login" className="m-2 hover:bg-turquois bg-saturatedOrange text-white rounded-3xl font-medium py-2 px-4 ">
            Register
          </Link>
          <Link to="/register" className="m-2 hover:bg-turquois bg-turquois text-white rounded-3xl font-medium py-2 px-4 ">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

