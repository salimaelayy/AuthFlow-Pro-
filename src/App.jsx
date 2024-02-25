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
