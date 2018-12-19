import axios from 'axios';

const BASE_URL = 'http://localhost:3000/menu';

const getAllMenuItems = () =>
  axios.get(BASE_URL).then(response => response.data);

const getMenuItemById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const removeMenuItemById = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status);

export { getAllMenuItems, getMenuItemById, removeMenuItemById };
