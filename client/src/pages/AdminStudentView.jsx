import React, { Component } from 'react';
import SearchBar from '../Search'; 


  
const ItemList = ({ items }) => {

const items2 = [
    'Item 1',
    'Item 2'
]


  return (
    <body>
    <h3>Students</h3>
    <SearchBar/>
    <ul>
          {items2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
    </ul>
     </body>
  );
};

export default ItemList;
