import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoutes({children}) {
  const location = useLocation();
  const {user, loading} = useContext(AuthContext);
  if(loading){
    return <h2>Loading.....</h2>
  }

  if(user){
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoutes