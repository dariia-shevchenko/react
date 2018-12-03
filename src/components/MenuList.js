import React from 'react';

const MenuList = ({ items }) => (
  <div className="menu__list">
    {items.map(item => (
      <div className="menu__item-wr" key={item.id}>
        <div className="menu__item">
          <div
            className="menu__item-img"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <p className="menu__item-name">{item.name}</p>
          <p className="menu__item-price">{item.price}$</p>
        </div>
      </div>
    ))}
  </div>
);

export default MenuList;
