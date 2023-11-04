import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import adminstudentview from './/pages/AdminStudentView';


const SearchableList = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            <Link to={`/adminstudentview/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;