import React from 'react';
import s from './Header.module.css';

const Navigation = ({ items }) => (
  <ul className={s.navigation}>
    {items.map(item => (
      <li key={item}>
        <a href="/" className={s.link}>
          {item}
        </a>
      </li>
    ))}
  </ul>
);

export default Navigation;
