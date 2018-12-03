import React from 'react';

const Logo = ({ logo = '', width = 60, height = 60 }) => (
  <a href="/">
    <img className="logo" src={logo} alt="Logo" width={width} height={height} />
  </a>
);

export default Logo;
