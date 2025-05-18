import api from './apiConfig';

// Get all skills
export const getAllSkills = async () => {
    try {
        const response = await api.get('/skills');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get skills by category
export const getSkillsByCategory = async (category) => {
    try {
        const response = await api.get(`/skills/category/${category}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get a single skill by ID
export const getSkillById = async (id) => {
    try {
        const response = await api.get(`/skills/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create a new skill
export const createSkill = async (skillData) => {
    try {
        const response = await api.post('/skills', skillData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update a skill
export const updateSkill = async (id, skillData) => {
    try {
        const response = await api.put(`/skills/${id}`, skillData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete a skill
export const deleteSkill = async (id) => {
    try {
        const response = await api.delete(`/skills/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}; 