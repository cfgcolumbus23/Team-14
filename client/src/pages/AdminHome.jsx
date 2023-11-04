import React, { Component } from 'react';
import SearchBar from '../Search'; 

  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  function App() {
    return (
      <div>
        <h3>Students</h3>
        <SearchBar items={items} />
      </div>
    )
  };

export default App;
