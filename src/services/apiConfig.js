import axios from 'axios';

// Flag to determine if we should use local JSON files instead of an API
const USE_LOCAL_JSON = false;

// Use environment variable in production, fallback to localhost in development
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Helper function to fetch local JSON data
export const fetchLocalJson = async (path) => {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${path}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching local JSON from ${path}:`, error);
        throw error;
    }
};

export const isUsingLocalJson = () => USE_LOCAL_JSON;

export default api; 