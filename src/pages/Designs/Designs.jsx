import React from "react";
import "./Designs.css";
import DemoTemplate from "../../../src/assets/images/mac-website.jpg";

export default function Designs() {
  const templates = [
    {
      id: 1,
      title: "Modern Album Launch Template",
      suitableFor: "Singers, Songwriters, Producers",
      includes: "Gallery, Music Player, Call-to-Action Sections",
      description:
        "A sleek, modern design perfect for promoting your latest album.",
      image: DemoTemplate,
    },
    {
      id: 2,
      title: "Event Countdown Template",
      suitableFor: "Event Organizers, Musicians",
      includes: "Countdown Timer, Ticket Links, Artist Bios",
      description:
        "Designed for upcoming events and tours with exciting features.",
      image: DemoTemplate,
    },
    {
      id: 3,
      title: "Portfolio Website Template",
      suitableFor: "Artists, Musicians",
      includes: "Portfolio Gallery, Testimonials, Contact Forms",
      description:
        "An elegant template to showcase your work and connect with fans.",
      image: DemoTemplate,
    },
  ];

  return (
    <div className="designs-container">
      <h1 className="designs-title">Popular Designs</h1>
      <p className="designs-subtitle">
        Discover professionally designed templates tailored for the creative industry.
      </p>

      <div className="templates-list">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <div className="template-details">
              <h2 className="template-title">{template.title}</h2>
              <p className="template-suitable">
                <strong>Suitable For:</strong> {template.suitableFor}
              </p>
              <p className="template-includes">
                <strong>Includes:</strong> {template.includes}
              </p>
              <p className="template-description">{template.description}</p>
              <button className="customize-button">Customize Design</button>
            </div>
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
