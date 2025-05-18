import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>
            </div>

            <h1 style={{ color: '#3e653d', marginBottom: '30px' }}>Admin Dashboard</h1>

            <div style={{ display: 'flex', marginBottom: '30px' }}>
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#3e653d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        marginRight: '10px',
                        cursor: 'pointer'
                    }}
                >
                    Education
                </button>
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f5f5f5',
                        color: '#333',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        marginRight: '10px',
                        cursor: 'pointer'
                    }}
                >
                    Skills
                </button>
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f5f5f5',
                        color: '#333',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Projects
                </button>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <h2>Education Management</h2>
                <p>Here you can manage your education entries.</p>

                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#3e653d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        marginTop: '15px',
                        cursor: 'pointer'
                    }}
                >
                    Add New Education
                </button>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>Institution</th>
                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>Degree</th>
                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>Year</th>
                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>University of Example</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Bachelor of Science</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>2018-2022</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                                <button style={{ padding: '6px 12px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', marginRight: '5px', cursor: 'pointer' }}>Edit</button>
                                <button style={{ padding: '6px 12px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage; 