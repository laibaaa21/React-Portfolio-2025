import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ requireAdmin = false }) => {
    const { isAuthenticated, currentUser, loading } = useAuth();

    // Show loading state while checking authentication
    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '5px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '50%',
                    borderTopColor: '#3e653d',
                    animation: 'spin 1s linear infinite'
                }}></div>
                <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        );
    }

    // Check if user is authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Check if route requires admin role
    if (requireAdmin && currentUser?.role !== 'admin') {
        // If user is authenticated but not admin, redirect to home
        return <Navigate to="/" replace />;
    }

    // If all checks pass, render the protected content
    return <Outlet />;
};

export default ProtectedRoute; 