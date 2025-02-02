import dotenv from 'dotenv';

dotenv.config();

export default {
  email: {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
};