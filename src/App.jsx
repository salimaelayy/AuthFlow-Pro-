// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Use the PrivateRoute component for the dashboard */}
        <Route ><PrivateRoute
          path="/dashboard"
          element={<Dashboard />}
          isAuthenticated={isAuthenticated}
        /></Route>
      </Routes>
    </Router>
  );
}

export default App;
