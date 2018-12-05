import React, { Component } from 'react';
import v4 from 'uuid/v4';
import '../css/App.css';
import '../css/normalize.css';
import orderHistory from '../order-history.json';
import menuItems from '../menu.json';
import UserAvatar from '../img/user-pic.svg';
import AppLogo from '../img/logo.svg';
import Header from './Header';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Item from './Item';
import Menu from './Menu';
import MenuFilter from './MenuFilter';
import MenuList from './MenuList';
import OrderHistory from './OrderHistory';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

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
        <Header>
          <Logo logo={logoParam} />
          <Navigation items={navItems} />
          <UserMenu user={userData} />
        </Header>

        <SignInForm />
        <SignUpForm />
        <Item>
          <CommentList comments={comments} />
          <CommentForm onSubmit={this.handleAddComment} />
        </Item>
        <OrderHistory items={orderHistory} />
        <Menu>
          <MenuFilter
            filter={filter}
            onFilterChange={this.handleFilterChange}
          />
          <MenuList items={filteredItems} />
        </Menu>
      </div>
    );
  }
}

export default App;
