import React from 'react';

const MenuFilter = ({ filter, onFilterChange }) => (
  <div className="menu__filter">
    <input
      className="menu__filter-input"
      type="text"
      placeholder="Search"
      value={filter}
      onChange={onFilterChange}
    />
  </div>
);

export default MenuFilter;
