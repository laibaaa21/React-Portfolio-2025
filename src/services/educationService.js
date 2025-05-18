import api, { fetchLocalJson, isUsingLocalJson } from './apiConfig';

// Sample fallback data in case both API and local JSON fail
const fallbackEducationData = [
    {
        "_id": "fallback1",
        "institution": "Information Technology University",
        "degree": "BS Computer Science",
        "field": "Computer Science",
        "startDate": "2022-09-01",
        "endDate": null,
        "current": true,
        "description": "Current CGPA: 3.4",
        "location": "Lahore, Pakistan"
    },
    {
        "_id": "fallback2",
        "institution": "Lahore Grammar School",
        "degree": "A-Levels",
        "field": "Pre-Engineering",
        "startDate": "2020-09-01",
        "endDate": "2022-06-30",
        "current": false,
        "description": "Math (A), Physics (B), IT (B)",
        "location": "Lahore, Pakistan"
    },
    {
        "_id": "fallback3",
        "institution": "AES",
        "degree": "O-Levels",
        "field": "General Education",
        "startDate": "2018-09-01",
        "endDate": "2020-06-30",
        "current": false,
        "description": "Grades: 7A*, 1A",
        "location": "Lahore, Pakistan"
    }
];

// Get all education entries
export const getAllEducation = async () => {
    try {
        if (isUsingLocalJson()) {
            // Use local JSON file
            return await fetchLocalJson('/data/education.json');
        } else {
            // Use API
            const response = await api.get('/education');
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching education data:', error);
        if (error.message && error.message.includes('Failed to fetch')) {
            console.warn('Falling back to hardcoded education data');
            return fallbackEducationData;
        }
        throw error;
    }
};

// Get a single education entry by ID
export const getEducationById = async (id) => {
    try {
        if (isUsingLocalJson()) {
            const data = await fetchLocalJson('/data/education.json');
            const item = data.find(item => item._id === id);
            if (!item) throw new Error('Education entry not found');
            return item;
        } else {
            const response = await api.get(`/education/${id}`);
            return response.data;
        }
    } catch (error) {
        console.error(`Error fetching education with ID ${id}:`, error);
        throw error;
    }
};

// Create a new education entry
export const createEducation = async (educationData) => {
    try {
        if (isUsingLocalJson()) {
            console.warn('Create operation not supported with local JSON');
            return { ...educationData, _id: 'temp-' + Date.now() };
        } else {
            const response = await api.post('/education', educationData);
            return response.data;
        }
    } catch (error) {
        console.error('Error creating education entry:', error);
        throw error;
    }
};

// Update an education entry
export const updateEducation = async (id, educationData) => {
    try {
        if (isUsingLocalJson()) {
            console.warn('Update operation not supported with local JSON');
            return { ...educationData, _id: id };
        } else {
            const response = await api.put(`/education/${id}`, educationData);
            return response.data;
        }
    } catch (error) {
        console.error(`Error updating education with ID ${id}:`, error);
        throw error;
    }
};

// Delete an education entry
export const deleteEducation = async (id) => {
    try {
        if (isUsingLocalJson()) {
            console.warn('Delete operation not supported with local JSON');
            return { id };
        } else {
            const response = await api.delete(`/education/${id}`);
            return response.data;
        }
    } catch (error) {
        console.error(`Error deleting education with ID ${id}:`, error);
        throw error;
    }
}; 