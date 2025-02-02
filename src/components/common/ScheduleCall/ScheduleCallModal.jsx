import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import classes from "./ScheduleCallModal.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

Modal.setAppElement("#root");

export default function ScheduleCallModal({ isOpen, onClose, service }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: service?.title || "",
  });
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (service) {
      setFormData((prevData) => ({ ...prevData, service: service.title }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/schedule-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatusMessage("Your call has been successfully scheduled!");
        setStatusType("success");
        setFormData({ name: "", email: "", service: service?.title || "" });

        // Wait for the success message to be displayed, then close the modal
        setTimeout(() => {
          onClose();
          // Show toast notification after modal closes
          toast.success("Our Agent will reach out within 24 hours. Ensure to check your email.", {
            position: "center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }, 2000); // Delay to allow success message visibility
      } else {
        setStatusMessage(result.message || "Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch (error) {
      setStatusMessage("Failed to schedule call. Please try again later.");
      setStatusType("error");
    }

    setTimeout(() => {
      setStatusMessage(null);
    }, 4000);

    setIsSubmitting(false);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={classes.modal} overlayClassName={classes.overlay} closeTimeoutMS={500}>
      <button className={classes.closeIcon} onClick={onClose} aria-label="Close">
        <X size={24} />
      </button>

      <div className={classes.header}>
        <h2>Schedule a Call</h2>
        <p>Fill in your details, and we'll set up a call to discuss your needs.</p>
      </div>

      {statusMessage && (
        <div className={`${classes.statusMessage} ${statusType === "success" ? classes.success : classes.error}`}>
          {statusType === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{statusMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="service">Selected Service</label>
          <input id="service" type="text" name="service" value={formData.service} readOnly />
        </div>

        <div className={classes.buttonGroup}>
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
          <PrimaryButton type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Confirm"}</PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}
