import api from './apiConfig';

// Get all projects
export const getAllProjects = async () => {
    try {
        const response = await api.get('/projects');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get featured projects
export const getFeaturedProjects = async () => {
    try {
        const response = await api.get('/projects/featured');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get a single project by ID
export const getProjectById = async (id) => {
    try {
        const response = await api.get(`/projects/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create a new project
export const createProject = async (projectData) => {
    try {
        const response = await api.post('/projects', projectData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update a project
export const updateProject = async (id, projectData) => {
    try {
        const response = await api.put(`/projects/${id}`, projectData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete a project
export const deleteProject = async (id) => {
    try {
        const response = await api.delete(`/projects/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}; 