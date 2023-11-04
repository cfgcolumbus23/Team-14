import React, { Component } from 'react';

  
const Rewards = () => {

  const prog_items = [
    'Incentive 4',
    'Incentive 5',
    'Incentive 6'
  ]

  const comp_items = [
    'Incentive 1',
    'Incentive 2',
    'Incentive 3'
  ]

  return (
    <body>
    <h3>Rewards</h3>
    <h3>In-Progress</h3>
    <ul>
          {prog_items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
    </ul>
    <h3>Completed</h3>
    <ul>
          {comp_items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
    </ul>
     </body>
  );
};

export default Rewards;