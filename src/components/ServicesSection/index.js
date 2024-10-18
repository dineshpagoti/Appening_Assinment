import React from 'react';
import './index.css';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-item">Psychiatric Evaluations</div>
        <div className="service-item">Medication Management</div>
        <div className="service-item">Supportive Psychotherapy</div>
        <div className="service-item">EMDR Therapy</div>
        <div className="service-item">Crisis Intervention</div>
      </div>
    </div>
  );
};

export default ServicesSection;
