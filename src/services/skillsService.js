import api, { fetchLocalJson, isUsingLocalJson } from './apiConfig';

// Sample fallback data in case both API and local JSON fail
const fallbackSkillsData = [
    {
        "_id": "fallback1",
        "name": "Unity",
        "level": "Advanced",
        "category": "Game Dev",
        "icon": "unity",
        "yearsOfExperience": 3
    },
    {
        "_id": "fallback2",
        "name": "OpenCV",
        "level": "Intermediate",
        "category": "Backend",
        "icon": "opencv",
        "yearsOfExperience": 2
    },
    {
        "_id": "fallback3",
        "name": "Adobe Photoshop",
        "level": "Expert",
        "category": "Design",
        "icon": "photoshop",
        "yearsOfExperience": 4
    },
    {
        "_id": "fallback4",
        "name": "Audacity",
        "level": "Expert",
        "category": "Other",
        "icon": "audacity",
        "yearsOfExperience": 3
    },
    {
        "_id": "fallback5",
        "name": "Problem Solving",
        "level": "Advanced",
        "category": "Other",
        "icon": "problem-solving",
        "yearsOfExperience": 5
    },
    {
        "_id": "fallback6",
        "name": "Adaptability",
        "level": "Expert",
        "category": "Other",
        "icon": "adaptability",
        "yearsOfExperience": 5
    }
];

// Get all skills
export const getAllSkills = async () => {
    try {
        if (isUsingLocalJson()) {
            // Use local JSON file
            return await fetchLocalJson('/data/skills.json');
        } else {
            // Use API
            const response = await api.get('/skills');
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching skills data:', error);
        if (error.message && error.message.includes('Failed to fetch')) {
            console.warn('Falling back to hardcoded skills data');
            return fallbackSkillsData;
        }
        throw error;
    }
};

// Get skills by category
export const getSkillsByCategory = async (category) => {
    try {
        if (isUsingLocalJson()) {
            const data = await fetchLocalJson('/data/skills.json');
            return data.filter(skill => skill.category === category);
        } else {
            const response = await api.get(`/skills/category/${category}`);
            return response.data;
        }
    } catch (error) {
        console.error(`Error fetching skills for category ${category}:`, error);
        if (error.message && error.message.includes('Failed to fetch')) {
            const filteredFallback = fallbackSkillsData.filter(skill => skill.category === category);
            return filteredFallback.length > 0 ? filteredFallback : [];
        }
        throw error;
    }
};

// Get a single skill by ID
export const getSkillById = async (id) => {
    try {
        if (isUsingLocalJson()) {
            const data = await fetchLocalJson('/data/skills.json');
            const item = data.find(item => item._id === id);
            if (!item) throw new Error('Skill not found');
            return item;
        } else {
            const response = await api.get(`/skills/${id}`);
            return response.data;
        }
    } catch (error) {
        console.error(`Error fetching skill with ID ${id}:`, error);
        throw error;
    }
};

// Create a new skill
export const createSkill = async (skillData) => {
    try {
        if (isUsingLocalJson()) {
            console.warn('Create operation not supported with local JSON');
            return { ...skillData, _id: 'temp-' + Date.now() };
        } else {
            const response = await api.post('/skills', skillData);
            return response.data;
        }
    } catch (error) {
        console.error('Error creating skill:', error);
        throw error;
    }
};

// Update a skill
export const updateSkill = async (id, skillData) => {
    try {
        if (isUsingLocalJson()) {
            console.warn('Update operation not supported with local JSON');
            return { ...skillData, _id: id };
        } else {
            const response = await api.put(`/skills/${id}`, skillData);
            return response.data;
        }
    } catch (error) {
        console.error(`Error updating skill with ID ${id}:`, error);
        throw error;
    }
};

// Delete a skill
export const deleteSkill = async (id) => {
    try {
        if (isUsingLocalJson()) {
            console.warn('Delete operation not supported with local JSON');
            return { id };
        } else {
            const response = await api.delete(`/skills/${id}`);
            return response.data;
        }
    } catch (error) {
        console.error(`Error deleting skill with ID ${id}:`, error);
        throw error;
    }
}; 