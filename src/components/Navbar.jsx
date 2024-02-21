import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { FaSignInAlt } from 'react-icons/fa'; // Import the login icon
import logo from '../assets/AuthFlow-Pro-full-logo.png';
=======
import LOGO_Full from '../assets/AuthFlow-Pro-logo.png'
>>>>>>> 3aa65a3af00df3528b78898f6c63df736d2c3969

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap shadow bg-greywhite p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} alt="logo" className="h-16 w-auto" /> 
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
        <div className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-end">
          {/* Replace the "Sign In" link with the login icon */}
          <Link to="/login" className="m-2">
            <FaSignInAlt className="text-saturatedOrange text-xl hover:text-turquois" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


