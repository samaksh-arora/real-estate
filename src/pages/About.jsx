import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHome, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaHome />, number: '150+', label: 'Properties Sold' },
    { icon: <FaUsers />, number: '200+', label: 'Happy Clients' },
    { icon: <FaAward />, number: '10+', label: 'Years Experience' },
    { icon: <FaHandshake />, number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Nitin Arora</h1>
          <p>Your Trusted Real Estate Professional in Windsor, Ontario</p>
        </motion.div>
      </section>

      {/* Main About Section */}
      <section className="about-main section">
        <div className="container">
          <div className="about-content-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Nitin Arora - Real Estate Agent"
              />
            </motion.div>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Meet Nitin Arora</h2>
              <p>
                As a dedicated real estate agent with HomeLife Gold Star Realty Inc., Brokerage, 
                I bring passion, expertise, and a commitment to excellence to every transaction. 
                My mission is simple: to help you achieve your real estate dreams while making 
                the process as smooth and stress-free as possible.
              </p>
              <p>
                With extensive knowledge of the Windsor and Essex County real estate market, 
                I specialize in residential properties, first-time home buyers, and investment 
                properties. Whether you're buying your first home, selling your current property, 
                or looking to invest, I'm here to guide you every step of the way.
              </p>
              <p>
                My approach is built on trust, transparency, and results. I believe in building 
                lasting relationships with my clients, and I'm proud to say that many of them 
                return to me for their future real estate needs and refer their friends and family.
              </p>
              <p>
                Beyond real estate, I'm actively involved in the Windsor community and understand 
                the unique characteristics that make each neighborhood special. Let's work together 
                to find your perfect property or achieve the best outcome for your sale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>My Core Values</h2>
            <p>The principles that guide everything I do</p>
          </motion.div>

          <div className="values-grid">
            {[
              {
                title: 'Integrity',
                description: 'Honest, transparent communication and ethical practices in every transaction.'
              },
              {
                title: 'Excellence',
                description: 'Delivering outstanding service and going above and beyond for my clients.'
              },
              {
                title: 'Expertise',
                description: 'Staying current with market trends and providing informed guidance.'
              },
              {
                title: 'Dedication',
                description: 'Committed to achieving the best possible outcomes for every client.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
