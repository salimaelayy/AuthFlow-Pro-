import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ children }) => {

  console.log(JSON.parse(localStorage.getItem('userInfo')));
  const userData = JSON.parse(localStorage.getItem('userInfo'))

return <>{userData?.id ? children : <Navigate to={'/login'}/>}</>
};

export default PrivateRoute;