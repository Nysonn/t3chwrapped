import express from "express";
import sendEmail from "../controllers/scheduleCallController.js"; // Add .js extension
const router = express.Router();

router.post("/schedule-call", async (req, res) => {
  try {
    const { name, email, service } = req.body;
    await sendEmail({ name, email, service });
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

export default router; // Use ES module export