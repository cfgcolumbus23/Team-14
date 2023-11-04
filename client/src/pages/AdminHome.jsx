import React, { Component } from 'react';
import SearchBar from '../Search'; 

  
const ItemList = ({ items }) => {

items = [
    'Item 1',
    'Item 2'
]


  return (
    <body>
    <h3>Students</h3>
    <SearchBar/>
    <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
    </ul>
     </body>
  );
};

export default ItemList;
