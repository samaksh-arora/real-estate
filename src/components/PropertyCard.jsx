import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import './PropertyCard.css';

const PropertyCard = ({ property, index }) => {
  return (
    <motion.div
      className="property-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-badge">{property.status}</div>
        <div className="property-price">${property.price.toLocaleString()}</div>
      </div>

      <div className="property-content">
        <h3>{property.title}</h3>
        <div className="property-location">
          <FaMapMarkerAlt />
          <span>{property.location}</span>
        </div>

        <div className="property-features">
          <div className="feature">
            <FaBed />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="feature">
            <FaBath />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="feature">
            <FaRulerCombined />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <a
          href={property.detailsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="view-details-btn"
        >
          View Details
        </a>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
