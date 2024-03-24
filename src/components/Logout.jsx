import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
  return (
    <div>
          Are you sure you want to logout?
          <Button onClick={()=>navigate('/')}>Yes, log out</Button>
          <Button onClick={() => navigate('/home')}>No, stay signed in</Button>
    </div>
  );
}

export default Logout;
