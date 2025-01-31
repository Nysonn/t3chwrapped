import transporter from '../config/nodemailerConfig.js';

export const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's name and email
    to: process.env.EMAIL,  // Your email
    subject: `Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }; 

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};
