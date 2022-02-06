import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login/Login';

const Initial = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login')
  }, [])
  
  return (
    <div>
      <Login/>
    </div>
  )
};
export default Initial;
