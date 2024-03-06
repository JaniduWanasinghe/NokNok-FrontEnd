// hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetUser } from '../utils/handleUser';

const useCustomer= () => {
  const navigate = useNavigate();

  useEffect(() => {

    if (GetUser().Role!=="customer" && GetUser().Role!=="user"  ) {
       
      navigate('/login');
    }
  }, [navigate]);
};

export default useCustomer;
