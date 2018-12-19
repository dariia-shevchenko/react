import React from 'react';
import MenuCard from './MenuCard';
import s from './Menu.module.css';

const MenuList = ({ items }) => (
  <div className={s.list}>
    {items.map(item => (
      <div className={s.item} key={item.id}>
        <MenuCard image={item.image} name={item.name} price={item.price} />
      </div>
    ))}
  </div>
);

export default MenuList;
