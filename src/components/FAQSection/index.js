import React from 'react';
import './index.css';

const FAQSection = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>Is psychiatry confidential?</h3>
        <p>Yes, we offer in-person and virtual psychiatry services where you can meet your provider in the comfort of your own home.</p>
      </div>
      <div className="faq-item">
        <h3>What is the best way to schedule a appointment?</h3>
        <p>You can schedule an appointment by contacting us through our website or calling our office.</p>
      </div>
      <div className="faq-item">
        <h3>How long does the initial appointment take?</h3>
        <p>The initial appointment typically lasts about 60 minutes.</p>
      </div>
    </div>
  );
};

export default FAQSection;
