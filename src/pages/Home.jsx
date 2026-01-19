import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { FaHome, FaHandshake, FaChartLine, FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {

  const services = [
    {
      icon: <FaHome />,
      title: 'Buy a Home',
      description: 'Find your perfect property with expert guidance through every step of the buying process.'
    },
    {
      icon: <FaHandshake />,
      title: 'Sell Your Home',
      description: 'Get top dollar for your property with strategic marketing and professional negotiation.'
    },
    {
      icon: <FaChartLine />,
      title: 'Market Analysis',
      description: 'Receive comprehensive market insights to make informed real estate decisions.'
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>How I Can Help You</h2>
            <p>Professional real estate services tailored to your needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="why-choose section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Me</h2>
            <p>Your trusted partner in Windsor real estate</p>
          </motion.div>

          <div className="why-choose-grid">
            <motion.div
              className="why-choose-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaStar />
              <h3>Local Expertise</h3>
              <p>Deep knowledge of Windsor neighborhoods, market trends, and property values.</p>
            </motion.div>

            <motion.div
              className="why-choose-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaStar />
              <h3>Personalized Service</h3>
              <p>Dedicated attention to your unique needs and real estate goals.</p>
            </motion.div>

            <motion.div
              className="why-choose-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaStar />
              <h3>Proven Results</h3>
              <p>Track record of successful transactions and satisfied clients.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Find Your Dream Home?</h2>
          <p>Let's work together to make your real estate goals a reality</p>
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;