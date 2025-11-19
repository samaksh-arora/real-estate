import React from 'react';
import { motion } from 'framer-motion';
import './FilterBar.css';

const FilterBar = ({ filters, setFilters }) => {
  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  return (
    <motion.div
      className="filter-bar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="filter-group">
        <label>Property Type</label>
        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Status</label>
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="For Sale">For Sale</option>
          <option value="Sold">Sold</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Bedrooms</label>
        <select
          value={filters.bedrooms}
          onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
        >
          <option value="all">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Price Range</label>
        <select
          value={filters.priceRange}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
        >
          <option value="all">Any Price</option>
          <option value="0-300000">Under $300K</option>
          <option value="300000-500000">$300K - $500K</option>
          <option value="500000-750000">$500K - $750K</option>
          <option value="750000-1000000">$750K - $1M</option>
          <option value="1000000-99999999">$1M+</option>
        </select>
      </div>

      <button
        className="reset-filters-btn"
        onClick={() => setFilters({ type: 'all', status: 'all', bedrooms: 'all', priceRange: 'all' })}
      >
        Reset Filters
      </button>
    </motion.div>
  );
};

export default FilterBar;

