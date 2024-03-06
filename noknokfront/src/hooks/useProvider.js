// hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetUser } from '../utils/handleUser';

const useProvider= () => {
  const navigate = useNavigate();

  useEffect(() => {

    if (GetUser().Role!=="provider"  ) {
       
      navigate('/login');
    }
  }, [navigate]);
};

export default  useProvider;
