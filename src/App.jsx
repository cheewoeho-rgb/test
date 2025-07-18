import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import ApplicantDashboard from './pages/ApplicantDashboard';
import ApproverDashboard from './pages/ApproverDashboard';

function PrivateRoute({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/applicant/*"
          element={
            <PrivateRoute role="applicant">
              <ApplicantDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/approver/*"
          element={
            <PrivateRoute role="approver">
              <ApproverDashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}
