import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
    
    <Navbar/>
    <div className="bg-gray-100 h-screen min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl text-turquois font-bold mb-4">Welcome to My App</h1>
        <p className="text-base text-turquois mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ante eu neque consectetur sagittis.</p>
        <div className="flex justify-center">
          <Link to="/login" className="bg-saturatedOrange hover:bg-turquois text-white font-bold py-2 px-5 rounded-3xl mr-4">
            Sign In
          </Link>
          <Link to="/register" className="bg-turquois hover:bg-saturatedOrange text-white font-bold py-2 px-5 rounded-3xl">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;

