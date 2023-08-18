import React from 'react';
import './HeaderCard.scss';

const HeaderCard = ({ card_name, item_count, icon }) => {
  return (
      <div className='headerCard'>
        <div className='headerCard-icon'>{icon}</div>
        <h3>{card_name}</h3>
        <h4>{item_count}</h4>
      </div>
    )
};

export default HeaderCard;