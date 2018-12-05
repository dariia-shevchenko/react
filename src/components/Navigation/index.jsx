import React from 'react';

const Navigation = ({ items }) => (
  <ul className="nav">
    {items.map(item => (
      <li key={item}>
        <a href="/">{item}</a>
      </li>
    ))}
  </ul>
);

export default Navigation;
