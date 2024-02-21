import React, { useState } from 'react'
import bg from '../assets/7594.png'
import { useCookies } from 'react-cookie';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/auth/login', formData);
      const { accessToken } = response.data;
      localStorage.setItem('userInfo',JSON.stringify(response.data))
      setCookie('accessToken', accessToken, { path: '/' });
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to login. Please check your credentials.');
    }
  };
    return (
      <div className="flex h-screen">
      {/* Left Div */}
      <div className="w-1/3 bg-greywhite"><img src={bg} alt="" /></div>

      {/* Right Div */}
      <div className="w-2/3 bg-white flex justify-center items-center">
        <div className="w-2/3">
          <h2 className="text-center text-5xl text-turquois font-bold mb-4">Sign In</h2>
          <form className="bg-white rounded px-8 pt-12 pb-8 mb-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <input
                className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
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
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-saturatedOrange hover:bg-saturatedOrange hover:opacity-85 text-white font-bold py-2 px-4 rounded h-12 w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login