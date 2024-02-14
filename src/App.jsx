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
