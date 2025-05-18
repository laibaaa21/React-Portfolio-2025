import React, { useState, useEffect } from 'react';
import styles from './AdminEducation.module.css';

const EducationForm = ({ onSubmit, onCancel, initialData, isEditing }) => {
    // Initialize form with initial data or empty values
    const [formData, setFormData] = useState({
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
        grade: '',
        location: ''
    });

    // Update form when initialData changes (for editing)
    useEffect(() => {
        if (initialData) {
            // Format dates for date inputs (YYYY-MM-DD)
            const formatDate = (dateString) => {
                if (!dateString) return '';
                const date = new Date(dateString);
                return date.toISOString().split('T')[0]; // YYYY-MM-DD format
            };

            setFormData({
                institution: initialData.institution || '',
                degree: initialData.degree || '',
                fieldOfStudy: initialData.fieldOfStudy || '',
                startDate: formatDate(initialData.startDate),
                endDate: formatDate(initialData.endDate),
                description: initialData.description || '',
                grade: initialData.grade || '',
                location: initialData.location || ''
            });
        }
    }, [initialData]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h3>{isEditing ? 'Edit Education' : 'Add New Education'}</h3>

            <div className={styles.formGroup}>
                <label htmlFor="institution">Institution*</label>
                <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="degree">Degree*</label>
                <input
                    type="text"
                    id="degree"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="fieldOfStudy">Field of Study*</label>
                <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label htmlFor="startDate">Start Date*</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="endDate">End Date (leave empty if current)</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="grade">Grade/GPA</label>
                <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                ></textarea>
            </div>

            <div className={styles.formActions}>
                <button type="submit" className={styles.saveButton}>
                    {isEditing ? 'Update' : 'Save'}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className={styles.cancelButton}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EducationForm; 