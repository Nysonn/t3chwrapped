import nodemailer from "nodemailer";
import config from "../config/scheduleCallConfig.js";
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = (data) => {
  const transporter = nodemailer.createTransport(config.email);

  const mailOptions = {
    from: config.email.auth.user,
    to: process.env.EMAIL,
    subject: `New Call Schedule Request - ${data.service}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Service: ${data.service}
    `,
  };

  return transporter.sendMail(mailOptions);
};

export default sendEmail; // Use ES module export