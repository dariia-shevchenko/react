import React from 'react';
import AppLogo from '../../img/logo.svg';

const Logo = ({ logo }) => (
  <a href="/">
    <img
      className="logo"
      src={AppLogo}
      alt="Logo"
      width={logo.logoWidth}
      height={logo.logoHeight}
    />
  </a>
);

export default Logo;
