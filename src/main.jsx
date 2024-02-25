import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Login from './pages/login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Login />
  </Provider>
);
