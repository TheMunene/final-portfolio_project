import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../assets/user.png';

const Avatar = ({ isLoggedIn, logout }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const dialogRef = useRef(null);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const openLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsDialogOpen(false);
      }
    };

    if (isDialogOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDialogOpen]);

  return (
    <div className="relative ml-2">
      <img 
        src={user}
        alt="User Avatar" 
        className="h-10 w-10 rounded-full cursor-pointer" 
        onClick={toggleDialog} 
      />
    </div>
  );
};

export default Avatar;
