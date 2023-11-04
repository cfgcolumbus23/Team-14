import React, { Component } from 'react';

  
const Rewards = () => {

    let items = {}
    items['Meijer $50 Gift Card'] = {'imgLink': 'https://i.ebayimg.com/images/g/TYYAAOSwWRZhkR8l/s-l1200.webp', 'points': 2000}
    items['Amazon $25 Gift Card'] = {'imgLink': 'https://neweragames.net/wp-content/uploads/2020/09/Amazon-Gift-Card-PNG-HD.png', 'points': 1000}
    items['Walmart $25 Gift Card'] = {'imgLink': 'https://production-gameflipusercontent.fingershock.com/us-east-1:ce4e5268-7c3a-41ba-a297-af5ee7e295cf/b6bc0fdc-8397-4809-80ef-5b0e82edf806/bceb248a-54b7-40f3-aea5-ccda1a760866', 'points': 1000}
    items['Target $10 Gift Card'] = {'imgLink': 'https://productimages.nimbledeals.com/gift_card_skin/886a74f0a8f86040de6d24b942aad6_1635169460328', 'points': 600}
    items['Speaker'] = {'imgLink': 'https://m.media-amazon.com/images/I/61iJoQoiVnL._AC_UF894,1000_QL80_.jpg', 'points': 800}
    items['Mug'] = {'imgLink': 'https://assets.eflorist.com/site/EF-12616/assets/products/CHR_/sku8260338.jpg', 'points': 300}
    
    return (
        <div>
        <h3>Rewards</h3>
        <ul>
            {Object.entries(items).map(([reward, value], index) => (
                <li key={index}><img src={value.imgLink} alt="reward" /> Points: {value.points}</li>
            ))}
        </ul>
        </div>
    );
};

export default Rewards;