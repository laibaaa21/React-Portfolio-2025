import React, { useState, useEffect } from 'react';
import { getAllEducation, createEducation, updateEducation, deleteEducation } from '../../../services/educationService';
import EducationForm from './EducationForm';
import styles from './AdminEducation.module.css';

const AdminEducation = () => {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Fetch education data
    const fetchEducation = async () => {
        setLoading(true);
        try {
            const data = await getAllEducation();
            setEducation(data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch education data');
            console.error('Error fetching education:', err);
        } finally {
            setLoading(false);
        }
    };

    // Load education on component mount
    useEffect(() => {
        fetchEducation();
    }, []);

    // Handle form submission (create or update)
    const handleSubmit = async (formData) => {
        try {
            if (isEditing) {
                await updateEducation(currentItem._id, formData);
            } else {
                await createEducation(formData);
            }

            fetchEducation();
            resetForm();
        } catch (err) {
            setError('Failed to save education data');
            console.error('Error saving education:', err);
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this education entry?')) {
            try {
                await deleteEducation(id);
                fetchEducation();
            } catch (err) {
                setError('Failed to delete education entry');
                console.error('Error deleting education:', err);
            }
        }
    };

    // Set up editing
    const handleEdit = (item) => {
        setCurrentItem(item);
        setIsEditing(true);
        setShowForm(true);
    };

    // Reset form
    const resetForm = () => {
        setCurrentItem(null);
        setIsEditing(false);
        setShowForm(false);
    };

    return (
        <div className={styles.adminEducation}>
            <div className={styles.header}>
                <h2>Education Management</h2>
                {!showForm && (
                    <button
                        onClick={() => setShowForm(true)}
                        className={styles.addButton}
                    >
                        Add New Education
                    </button>
                )}
            </div>

            {error && <div className={styles.error}>{error}</div>}

            {showForm ? (
                <EducationForm
                    onSubmit={handleSubmit}
                    onCancel={resetForm}
                    initialData={currentItem}
                    isEditing={isEditing}
                />
            ) : (
                <div className={styles.educationList}>
                    {loading ? (
                        <p>Loading education data...</p>
                    ) : education.length === 0 ? (
                        <p>No education entries found. Add one to get started.</p>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Institution</th>
                                    <th>Degree</th>
                                    <th>Field of Study</th>
                                    <th>Duration</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {education.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.institution}</td>
                                        <td>{item.degree}</td>
                                        <td>{item.fieldOfStudy}</td>
                                        <td>
                                            {new Date(item.startDate).toLocaleDateString()} -
                                            {item.endDate
                                                ? new Date(item.endDate).toLocaleDateString()
                                                : 'Present'}
                                        </td>
                                        <td className={styles.actions}>
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className={styles.editButton}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className={styles.deleteButton}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminEducation; 