import React from 'react';
import s from './Menu.module.css';

const MenuCard = ({ image, name, price }) => (
  <div className={s.itemContent}>
    <div className={s.img} style={{ backgroundImage: `url(${image})` }} />
    <p className={s.name}>{name}</p>
    <p className={s.price}>Price: {price}$</p>
  </div>
);

export default MenuCard;
