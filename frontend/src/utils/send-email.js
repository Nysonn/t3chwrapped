export const handleSubmit = async (e, formData, setStatus, setFormData, setIsSending) => {
  e.preventDefault();
  setIsSending(true);

  try {
    const response = await fetch('http://localhost:5000/api/send-email', {
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

  } catch (error) {
    console.error('Error:', error);
    setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
  } finally {
    setIsSending(false); // Ensure isSending is set to false after the submission process
  }

  // Clear the form
  setFormData({ name: '', email: '', subject: '', message: '' });

  // Hide message after 5 seconds
  setTimeout(() => setStatus({ type: '', message: '' }), 5000);
};