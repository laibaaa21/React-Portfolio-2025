import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create context
const AuthContext = createContext();

// Context hook
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    // Initialize axios with token from localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        }
    }, []);

    // Load user data from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setCurrentUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Error parsing stored user data:', error);
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    // Login user
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            });

            const { token, ...userData } = response.data;

            // Save to localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userData));

            // Update state and axios default headers
            setToken(token);
            setCurrentUser(userData);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            return { success: true, data: userData };
        } catch (error) {
            console.error('Login error:', error.response?.data || error);
            return {
                success: false,
                error: error.response?.data?.message || 'Login failed'
            };
        }
    };

    // Logout user
    const logout = () => {
        // Clear localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Clear state and axios headers
        setToken(null);
        setCurrentUser(null);
        delete axios.defaults.headers.common['Authorization'];
    };

    // Check if user is admin
    const isAdmin = () => {
        return currentUser?.role === 'admin';
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                token,
                loading,
                isAuthenticated: !!token,
                login,
                logout,
                isAdmin
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}; 