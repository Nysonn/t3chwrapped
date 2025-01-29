import React, { useState } from 'react';
import classes from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/send-email', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.success) {
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send email. Please try again.' });
      }
  
      // Clear the form
      setFormData({ name: '', email: '', subject: '', message: '' });
  
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
  
      // Clear the form in case of a network error
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  
    // Hide message after 5 seconds
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactContent}>
        <div className={classes.headerSection}>
          <h1 className={classes.title}>Get in Touch</h1>
          <p className={classes.subtitle}>Have a question or want to work together?</p>
        </div>

        {/* Notification Message */}
        {status.message && (
          <div className={`${classes.notification} ${status.type === 'success' ? classes.success : classes.error}`}>
            {status.message}
          </div>
        )}

        <form className={classes.contactForm} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
              rows="6"
            />
          </div>

          <button type="submit" className={classes.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
