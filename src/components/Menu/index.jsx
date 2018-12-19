import React, { Component } from 'react';
import MenuFilter from './MenuFilter';
import MenuList from './MenuList';
import s from './Menu.module.css';
import * as API from '../../services/menu';

const filterItems = (filter, items) =>
  items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
class Menu extends Component {
  state = {
    filter: '',
    menuItems: [],
  };

  componentDidMount() {
    API.getAllMenuItems().then(menuItems => {
      this.setState({ menuItems });
    });
  }

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { filter, menuItems } = this.state;
    const filteredItems = filterItems(filter, menuItems);

    return (
      <div className={s.container}>
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <MenuList items={filteredItems} />
      </div>
    );
  }
}

export default Menu;
