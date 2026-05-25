import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About PizzaHub</h1>
        
        <div className="about-section">
          <h2>🍕 Our Story</h2>
          <p>
            Welcome to PizzaHub, your go-to destination for authentic and delicious pizzas! 
            Founded in 2020, we have been serving our community with fresh, high-quality ingredients 
            and innovative pizza recipes. Our mission is to bring joy and satisfaction to every pizza lover.
          </p>
        </div>

        <div className="about-section">
          <h2>✨ Why Choose Us?</h2>
          <ul className="features-list">
            <li>🥗 Fresh, Premium Ingredients</li>
            <li>👨‍🍳 Expert Italian Chefs</li>
            <li>⚡ Quick Delivery Service</li>
            <li>🎯 Variety of Pizza Options</li>
            <li>💰 Affordable Prices</li>
            <li>📱 Easy Online Ordering</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🎯 Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We use only the finest ingredients to ensure every pizza is perfect.</p>
            </div>
            <div className="value-card">
              <h3>Customer Service</h3>
              <p>Your satisfaction is our top priority. We're always here to help!</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly create new and exciting pizza flavors for you.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We care about the environment and use eco-friendly packaging.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>📊 By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Orders Daily</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Pizza Varieties</p>
            </div>
            <div className="stat-item">
              <h3>5⭐</h3>
              <p>Rating Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
