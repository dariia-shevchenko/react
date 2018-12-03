import React from 'react';

const UserMenu = ({ user }) => (
  <div className="user-menu">
    <img
      className="user-menu__img"
      src={user.avatar}
      alt="Avatar"
      width={user.avatarWidth}
      height={user.avatarHeight}
    />
    <span className="user-menu__name">{user.name}</span>
  </div>
);

export default UserMenu;
