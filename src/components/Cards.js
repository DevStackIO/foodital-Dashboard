import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards-container'>
            <CardItem
              title='Invite Foodies'
              points='Earn 2 points'
            />
            <CardItem
              title='Invite Vendors'
              points='Earn 5 points'
            />
            <CardItem
              title='Invite Delivery'
              points='Earn 3 points'
            />
      </div>
    </div>
  );
}

export default Cards;
