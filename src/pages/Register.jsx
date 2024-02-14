import React from 'react'
import bg from '../assets/7594.png'

const register = () => {
  return (
      <div className="flex h-screen">
        {/* Left Div */}
        <div className="w-1/3 bg-gray-200"><img src={bg} alt="" /></div>
  
        {/* Right Div */}
        <div className="w-2/3 bg-white flex justify-center items-center">
          <div className="w-2/3">
            <h2 className="text-center text-3xl text-turquois font-bold mb-4">Sign Up</h2>
            <form className="bg-white b rounded px-8 pt-12 pb-8 mb-4" onSubmit={() => console.log("salam")}>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value=""
                  onChange={() => console.log("salam")}
                />
              </div> 
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value=""
                  onChange={() => console.log("salam")}
                />
              </div>
              <div className="mb-6">
                <input
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value=""
                  onChange={() => console.log("salam")}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-saturatedOrange hover:bg-saturatedOrange hover:opacity-85 text-white font-bold py-2 px-4 rounded h-12 w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  


export default register