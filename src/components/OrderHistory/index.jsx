import React from 'react';

const OrderHistory = ({ items }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery address</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.price}$</td>
          <td>{item.address}</td>
          <td>{item.rating}/10</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderHistory;
