import React, { Component } from 'react';
import data from '../../data/data.json';
import './index.css';

class MainContent extends Component {
  state = {
    founderMessage: data.founderMessage,
    services: data.services,
    testimonials: data.testimonials,
  };

  render() {
    return (
      <main className="main-content">
        <section id="founder" className="section">
          <h2 className="section-title">Founder's Message</h2>
          <p>{this.state.founderMessage}</p>
        </section>

        <section id="services" className="section">
          <h2 className="section-title">Our Services</h2>
          <ul className="services-list">
            {this.state.services.map((service, index) => (
              <li key={index} className="service-item">{service}</li>
            ))}
          </ul>
        </section>

        <section id="testimonials" className="section">
          <h2 className="section-title">Testimonials</h2>
          <ul className="testimonials-list">
            {this.state.testimonials.map((testimonial, index) => (
              <li key={index} className="testimonial-item">
                <p>"{testimonial.message}"</p>
                <p className="testimonial-author">- {testimonial.author}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default MainContent;
