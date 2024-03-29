// hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetUser } from '../utils/handleUser';

const useAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {

    if (GetUser().Role!=="Admin") {
       
      navigate('/login');
    }
  }, [navigate]);
};

export default useAdmin;
