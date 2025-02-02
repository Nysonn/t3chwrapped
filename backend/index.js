import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import emailRoutes from './routes/emailRoutes.js';
import scheduleCallRoute from './routes/scheduleCallRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', emailRoutes);
app.use("/api", scheduleCallRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});