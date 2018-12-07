import React from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

const Header = ({ logo, items, user }) => (
  <div className="header">
    <Logo logo={logo} />
    <Navigation items={items} />
    <UserMenu user={user} />
  </div>
);

export default Header;
