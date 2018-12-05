import React, { Component } from 'react';
import Dropdown from '../Dropdown';

class UserMenu extends Component {
  state = {
    isOpen: false,
  };

  render() {
    const { isOpen } = this.state;
    const { user } = this.props;

    return (
      <div className="user-menu">
        <img
          className="user-menu__img"
          src={user.avatar}
          alt="Avatar"
          width={user.avatarWidth}
          height={user.avatarHeight}
        />
        <span className="user-menu__name">{user.name}</span>

        {isOpen && <Dropdown />}
      </div>
    );
  }
}

export default UserMenu;
