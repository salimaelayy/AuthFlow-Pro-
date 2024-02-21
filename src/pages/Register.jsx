<<<<<<< HEAD
// Register.jsx
import React, { useState } from 'react';
import bg from '../assets/7594.png';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can replace this with your register logic
    };

    return (
        <div className="flex h-screen">
            {/* Left Div */}
            <div className="w-1/3 bg-gray-200"><img src={bg} alt="" /></div>

            {/* Right Div */}
            <div className="w-2/3 bg-white flex justify-center items-center">
                <div className="w-2/3">
                    <h2 className="text-center text-3xl text-turquoise font-bold mb-4">Sign Up</h2>
                    <form className="bg-white rounded px-8 pt-12 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
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
=======
import React, { useState } from 'react'
import bg from '../assets/7594.png'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [cookies, setCookie] = useCookies(['accessToken']);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/user/register', formData);
      console.log('Registration successful:', response.data);
      const { accessToken } = response.data;
      localStorage.setItem('userInfo',JSON.stringify(response.data))
      setCookie('accessToken', accessToken, { path: '/' });
      navigate('/dashboard');
      // Optionally, you can redirect the user to another page after successful registration
    } catch (error) {
      console.error('Registration error:', error);
      setError('Failed to register. Please try again later.');
    }
  };
  return (
      <div className="flex h-screen">
        {/* Left Div */}
        <div className="w-1/3 bg-gray-200"><img src={bg} alt="" /></div>
  
        {/* Right Div */}
        <div className="w-2/3 bg-white flex justify-center items-center">
          <div className="w-2/3">
            <h2 className="text-center text-3xl text-turquois font-bold mb-4">Sign Up</h2>
            <form className="bg-white b rounded px-8 pt-12 pb-8 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={setFormData.username}
                  onChange={handleChange}
                />
              </div> 
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={setFormData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <input
                  className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={setFormData.password}
                  onChange={handleChange}
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
>>>>>>> 3aa65a3af00df3528b78898f6c63df736d2c3969
        </div>
    );
<<<<<<< HEAD
};

export default Register;
=======
  };
  
export default register
>>>>>>> 3aa65a3af00df3528b78898f6c63df736d2c3969
