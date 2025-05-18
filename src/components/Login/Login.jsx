import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const result = await login(email, password);

            if (!result.success) {
                setError(result.error);
            } else {
                // If login successful, check if user is admin
                if (result.data.role === 'admin') {
                    navigate('/admin');
                } else {
                    // If not admin, show error
                    setError('You need admin privileges to access the dashboard');
                }
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
            backgroundColor: '#f5f5f5'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                padding: '30px',
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    color: '#3e653d'
                }}>Admin Login</h1>

                {error && (
                    <div style={{
                        marginBottom: '20px',
                        padding: '10px',
                        backgroundColor: '#ffebee',
                        color: '#c62828',
                        borderRadius: '4px',
                        textAlign: 'center'
                    }}>{error}</div>
                )}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontWeight: '500'
                        }}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                fontSize: '16px'
                            }}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontWeight: '500'
                        }}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                fontSize: '16px'
                            }}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#3e653d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontWeight: '500',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            opacity: isLoading ? 0.7 : 1
                        }}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login; 