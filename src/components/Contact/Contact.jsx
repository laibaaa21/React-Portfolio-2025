import React, { useState, useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import './Contact.css';

const Contact = () => {
  const { updatePageTitle } = usePageTitle();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    updatePageTitle('Contact');
  }, [updatePageTitle]);

  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Form is valid, handle submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setShowAlert(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } else {
      // Form has errors
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact">
      {showAlert && (
        <div className="form-alert success">
          <p>Thank you for your message! I'll get back to you soon.</p>
          <button onClick={() => setShowAlert(false)} className="close-alert">×</button>
        </div>
      )}
      
      <div className="contact-container">
        <h2 className="contact-heading">I'd love to hear from you</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${formErrors.name ? 'input-error' : ''}`}
              placeholder="Ex: Laiba Saqlain"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${formErrors.email ? 'input-error' : ''}`}
              placeholder="Ex: laibasaqlain92@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className={`form-textarea ${formErrors.message ? 'input-error' : ''}`}
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
            />
            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
