import React from 'react';
import MenuFilter from '../MenuFilter';
import MenuList from '../MenuList';

const Menu = ({ filter, filteredItems, handleFilterChange }) => (
  <div className="menu">
    <MenuFilter filter={filter} onFilterChange={handleFilterChange} />
    <MenuList items={filteredItems} />
  </div>
);

export default Menu;
