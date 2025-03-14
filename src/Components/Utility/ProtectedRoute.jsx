import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ auth, children }) => {
  if (auth) { return children ? children : <Outlet />; }
  else { return <Navigate to="/" replace />; }
};

export default ProtectedRoute;