import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    // Configurar el token en axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [token, navigate]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;