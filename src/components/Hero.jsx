import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="hero">
      <motion.div
        className="hero-background"
        style={{ y }}
      >
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
          alt="Luxury home"
        />
      </motion.div>

      <motion.div
        className="hero-content"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Find Your Dream Home in<br />
          <span className="highlight">Windsor, Ontario</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Expert real estate services with personalized attention to help you buy or sell your property
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact" className="btn-secondary">
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="mouse"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
