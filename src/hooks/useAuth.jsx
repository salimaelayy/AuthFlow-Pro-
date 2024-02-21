
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const useAuth = () => {
  const [cookies] = useCookies(['accessToken']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!cookies['accessToken']);
  }, [cookies]);
  return isAuthenticated;

};

export default useAuth;
