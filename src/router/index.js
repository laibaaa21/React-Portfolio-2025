import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage/AdminPage';
import Login from '../components/Login/Login';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Admin Routes */}
                <Route element={<ProtectedRoute requireAdmin={true} />}>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/*" element={<AdminPage />} />
                </Route>

                {/* Catch-all route */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter; 