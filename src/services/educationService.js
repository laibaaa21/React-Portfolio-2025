import api from './apiConfig';

// Get all education entries
export const getAllEducation = async () => {
    try {
        const response = await api.get('/education');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get a single education entry by ID
export const getEducationById = async (id) => {
    try {
        const response = await api.get(`/education/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create a new education entry
export const createEducation = async (educationData) => {
    try {
        const response = await api.post('/education', educationData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update an education entry
export const updateEducation = async (id, educationData) => {
    try {
        const response = await api.put(`/education/${id}`, educationData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete an education entry
export const deleteEducation = async (id) => {
    try {
        const response = await api.delete(`/education/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}; 