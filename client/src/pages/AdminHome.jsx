import React, { Component } from 'react';
import SearchBar from '../Search'; 
import './AdminHome.css'
  
const ItemList = ({ items }) => {

items = [
    'Item 1',
    'Item 2'
]


  return (
    <div class="AdminHome">
      <h3>Students</h3>
      <SearchBar/>
      <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
      </ul>
    </div>
  );
};


export default ItemList;
