import React from 'react';
import SearchBar from '../Search';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const items = [
  { id: 1, name: 'Student 1' },
  { id: 2, name: 'Student 2' },
  { id: 3, name: 'Student 3' },
];


function App() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCreateTest = () => {
    // Redirect to the "createtest" page
    navigate('/createtest');
  };



  return (
    <div>
      <h3>Students</h3>
      <SearchBar items={items} />

      <button onClick={handleCreateTest}>Create a Test</button>
    </div>
  );
}

export default App;