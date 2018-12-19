import React, { Component } from 'react';

// components
import OrderTable from './OrderTable';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

// styles
import s from '../Modal/Modal.module.css';
import o from './OrderHistoryPage.module.css';
import b from '../Button/Button.module.css';
import i from '../Input/Input.module.css';

// API
import * as API from '../../services/order-history';

//
import ModalHoc from '../../hoc/ModalHoc';

const INITIAL_STATE = {
  price: '',
  address: '',
  rating: '',
};

export default class OrderHistoryPage extends Component {
  state = {
    orderHistory: [],
    orderMoreInfo: [],
    ...INITIAL_STATE,
  };

  componentDidMount() {
    API.getAllOrderItems().then(orderHistory =>
      this.setState({ orderHistory }),
    );
  }

  handleRemoveOrderHistory = id =>
    API.removeOrderItemById(id).then(isSuccess => {
      if (isSuccess) {
        this.setState(state => ({
          orderHistory: state.orderHistory.filter(item => item.id !== id),
        }));
      }
    });

  handleGetMoreInfo = id =>
    API.getOrderItemById(id).then(orderMoreInfo =>
      this.setState({ orderMoreInfo }),
    );

  handleAddOrderItem = e => {
    e.preventDefault();
    const { price, address, rating } = this.state;
    const item = {
      date: new Date(Date.now()).toLocaleString(),
      price,
      address,
      rating,
    };

    API.addOrderItem(item).then(newOrderItem =>
      this.setState(state => ({
        orderHistory: [...state.orderHistory, newOrderItem],
      })),
    );

    this.reset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { orderHistory, orderMoreInfo, price, address, rating } = this.state;
    return (
      <div>
        <ModalHoc getDataById={this.handleGetMoreInfo}>
          {({ isOpen, open, close, ref }) => (
            <div>
              <OrderTable
                items={orderHistory}
                onDelete={this.handleRemoveOrderHistory}
                onMoreInfo={open}
              />
              {isOpen && (
                <Modal
                  onClose={close}
                  ref={ref}
                  text={<div className={s.modalText}>{orderMoreInfo}</div>}
                />
              )}
            </div>
          )}
        </ModalHoc>
        <form className={o.form} onSubmit={this.handleAddOrderItem}>
          <p>Add item to Order History</p>
          <Input
            className={i.input}
            type="text"
            placeholder="Price"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
          <Input
            className={i.input}
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
          <Input
            className={i.input}
            type="text"
            placeholder="Rate from 1 to 10"
            name="rating"
            value={rating}
            onChange={this.handleChange}
          />
          <Button className={b.btn} type="submit">
            Add Item
          </Button>
        </form>
      </div>
    );
  }
}
