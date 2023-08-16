import React from 'react';
import './HeaderCard.scss';

const HeaderCard = ({ data }) => {
  const { card_name, item_count, icon } = data;
  return (
      <div className='headerCard'>
        <div className='headerCard-icon'>{icon}</div>
        <h3>{card_name}</h3>
        <h4>{item_count}</h4>
      </div>
    )
};

export default HeaderCard;