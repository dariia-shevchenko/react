import React from 'react';

const Navigation = ({ items }) => (
  <ul className="nav">
    {items.map(item => (
      <li key={item.id}>
        <a href="/">{item.name}</a>
      </li>
    ))}
  </ul>
);

export default Navigation;
