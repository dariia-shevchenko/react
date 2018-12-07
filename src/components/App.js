import React, { Component } from 'react';
import v4 from 'uuid/v4';
import '../css/App.css';
import '../css/normalize.css';
import orderHistory from '../order-history.json';
import menuItems from '../menu.json';
import UserAvatar from '../img/user-pic.svg';
import AppLogo from '../img/logo.svg';
import Header from './Header';
import Item from './Item';
import Menu from './Menu';
import OrderHistory from './OrderHistory';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const userData = {
  name: 'Bob Ross',
  avatar: UserAvatar,
  avatarWidth: 15,
  avatarHeight: 15,
};

const logoParam = {
  logoImg: AppLogo,
  logoWidth: '50',
  logoHeight: '50',
};

const filterItems = (filter, items) =>
  items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

class App extends Component {
  state = {
    filter: '',
    comments: [],
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleAddComment = ({ text, rate }) => {
    this.setState(prevState => ({
      comments: [{ id: v4(), text, rate }, ...prevState.comments],
    }));
  };

  render() {
    const { filter, comments } = this.state;
    const filteredItems = filterItems(filter, menuItems);

    return (
      <div className="app">
        <Header user={userData} logo={logoParam} items={navItems} />
        <SignInForm />
        <SignUpForm />
        <Item comments={comments} handleAddComment={this.handleAddComment} />
        <OrderHistory items={orderHistory} />
        <Menu
          filteredItems={filteredItems}
          handleFilterChange={this.handleFilterChange}
          filter={filter}
        />
      </div>
    );
  }
}

export default App;
