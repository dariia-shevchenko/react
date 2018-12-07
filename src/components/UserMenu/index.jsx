import React, { Component, createRef } from 'react';
import Dropdown from '../Dropdown';

class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = () => {
    console.log(this.containerRef);
  };

  toggleDropDown = () => {
    this.setState(state => ({
      isDropdownOpen: !state.isDropdownOpen,
    }));
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { user } = this.props;

    return (
      <div
        className="user-menu"
        onClick={this.toggleDropDown}
        ref={this.containerRef}
      >
        <img
          className="user-menu__img"
          src={user.avatar}
          alt="Avatar"
          width={user.avatarWidth}
          height={user.avatarHeight}
        />
        <span className="user-menu__name">{user.name}</span>

        {isDropdownOpen && <Dropdown />}
      </div>
    );
  }
}

export default UserMenu;
