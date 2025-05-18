import api from './apiConfig';

// Get all experience entries
export const getAllExperience = async () => {
    try {
        const response = await api.get('/experience');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get a single experience entry by ID
export const getExperienceById = async (id) => {
    try {
        const response = await api.get(`/experience/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create a new experience entry
export const createExperience = async (experienceData) => {
    try {
        const response = await api.post('/experience', experienceData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update an experience entry
export const updateExperience = async (id, experienceData) => {
    try {
        const response = await api.put(`/experience/${id}`, experienceData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete an experience entry
export const deleteExperience = async (id) => {
    try {
        const response = await api.delete(`/experience/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}; 