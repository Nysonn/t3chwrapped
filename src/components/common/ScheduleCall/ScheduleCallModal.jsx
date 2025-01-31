import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { X } from "lucide-react"; // Import the close icon
import classes from "./ScheduleCallModal.module.css"; 
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

Modal.setAppElement("#root");

export default function ScheduleCallModal({ isOpen, onClose, service }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: service?.title || "",
    timezone: "UTC", // Added default time zone
  });

  useEffect(() => {
    if (service) {
      setFormData((prevData) => ({
        ...prevData,
        service: service.title,
      }));
    }
  }, [service]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduling call with details:", formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={classes.modal}
      overlayClassName={classes.overlay}
      closeTimeoutMS={500} // Ensure that modal close is smooth and matches the animation duration
    >
      {/* Close Button */}
      <button className={classes.closeIcon} onClick={onClose} aria-label="Close">
        <X size={24} />
      </button>

      <div className={classes.header}>
        <h2>Schedule a Call</h2>
        <p>Fill in your details, and we'll set up a call to discuss your needs.</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="service">Selected Service</label>
          <input
            id="service"
            type="text"
            name="service"
            value={formData.service}
            readOnly
          />
        </div>

        <div className={classes.buttonGroup}>
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
          <PrimaryButton>Confirm</PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}
