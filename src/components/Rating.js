import React from 'react';

const Rating = ({ options, rate, onChange }) => (
  <select value={rate} onChange={onChange} className="rate">
    {options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default Rating;
