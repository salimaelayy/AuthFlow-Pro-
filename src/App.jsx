<<<<<<< HEAD
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Dashboard from '../src/pages/Login'
import { useState } from 'react';

function App() {
  const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
    return isAuthenticated ? (
      <Route {...rest} element={<Element />} />
    ) : (
      <Navigate to="/login" replace />
    );
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Logic to set isAuthenticated to true after successful login
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Logic to set isAuthenticated to false after logout
    setIsAuthenticated(false);
  };

  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <PrivateRoute
          path="/dashboard"
          element={Dashboard}
          isAuthenticated={isAuthenticated}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute'
import Register from './pages/Register'

const App = () => {
    return (
        <Router>
            <Routes>
              <Route exact path='/dashboard' element={<PrivateRoute children={<Dashboard/>}/>}/>
               <Route exact path='/register' element={<Register/>}/>
              <Route exact path='/login' element={<Login/>}/>
        </Routes>
        </Router>
    );
};

export default App;
>>>>>>> 3aa65a3af00df3528b78898f6c63df736d2c3969
