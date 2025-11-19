import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';
import { properties } from '../data/properties';
import './Listings.css';

const Listings = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all',
    bedrooms: 'all',
    priceRange: 'all'
  });

  const filterProperties = () => {
    return properties.filter(property => {
      // Type filter
      if (filters.type !== 'all' && property.type !== filters.type) {
        return false;
      }

      // Status filter
      if (filters.status !== 'all' && property.status !== filters.status) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms !== 'all' && property.bedrooms < parseInt(filters.bedrooms)) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (property.price < min || property.price > max) {
          return false;
        }
      }

      return true;
    });
  };

  const filteredProperties = filterProperties();

  return (
    <div className="listings-page">
      {/* Hero Section */}
      <section className="listings-hero">
        <motion.div
          className="listings-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Property Listings</h1>
          <p>Discover your perfect home in Windsor and Essex County</p>
        </motion.div>
      </section>

      {/* Listings Content */}
      <section className="listings-content section">
        <div className="container">
          <FilterBar filters={filters} setFilters={setFilters} />

          <motion.div
            className="results-count"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}</p>
          </motion.div>

          {filteredProperties.length > 0 ? (
            <div className="properties-grid">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>No properties found</h3>
              <p>Try adjusting your filters to see more results</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Listings;
