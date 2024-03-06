// hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking local storage)
    const userInfo = JSON.parse(localStorage.getItem('user'));

    if (userInfo.Role!=="Admin") {
      // Redirect to the login page if not authenticated
      navigate('/login');
    }
  }, [navigate]);
};

export default useAdmin;
