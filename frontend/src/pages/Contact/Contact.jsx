import React, { useState } from 'react';
import classes from './Contact.module.css';
import { handleSubmit } from '../../utils/send-email';
import SecondaryButton from '../../components/common/Button/SecondaryButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

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

        <form className={classes.contactForm} onSubmit={(e) => handleSubmit(e, formData, setStatus, setFormData, setIsSending)}>
          <div className={classes.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              placeholder="Your message here..."
              required
              rows="6"
            />
          </div>

          <SecondaryButton type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Your Message"}
          </SecondaryButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;

