import React from 'react';

const Logo = ({ logo }) => (
  <a href="/">
    <img
      className="logo"
      src={logo.logoImg}
      alt="Logo"
      width={logo.logoWidth}
      height={logo.logoHeight}
    />
  </a>
);

export default Logo;
