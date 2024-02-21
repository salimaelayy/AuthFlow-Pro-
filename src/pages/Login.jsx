<<<<<<< HEAD
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bg from '../assets/7594.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [_, setCookie] = useCookies(["access_token"]);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/auth/login", { username, password });
            const { accessToken, id } = response.data;
            setCookie("access_token", accessToken, { path: '/', maxAge: 604800 }); // Set cookie to expire in 7 days
            window.localStorage.setItem('UserID', id); // Assuming the id is returned in response.data.id
            navigate('/dashboard');
        } catch (error) {
            console.error("Error during login:", error.response);
            if (error.response && error.response.status === 404) {
                window.alert("User not found");
            } else if (error.response && error.response.status === 400) {
                window.alert("Username or password is incorrect");
            } else {
                window.alert("An error occurred during login");
            }
        }
    };
=======
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
>>>>>>> 3aa65a3af00df3528b78898f6c63df736d2c3969

    return (
        <div className="flex h-screen">
            <div className="w-1/3 bg-gray-200"><img src={bg} alt="" /></div>
            <div className="w-2/3 bg-white flex justify-center items-center">
                <div className="w-2/3">
                    <h2 className="text-center text-5xl text-turquoise font-bold mb-4">Sign In</h2>
                    <form className="bg-white rounded px-8 pt-12 pb-8 mb-4" onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <input
                                className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

export default Login;
