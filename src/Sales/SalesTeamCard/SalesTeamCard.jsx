import React from 'react';
import './SalesTeamCard.scss';
import { Image } from 'antd';

const SalesTeamCard = ({ data }) => {
  const { salesman_name, img, position, sale_item_count, department, active_status } = data;
  return (
    <div className='SalesTeamCard'>
      <div className="salesTeamCard-header">
        <div className={active_status === 'Active' ? "status-active" : 'status-in-active'}>{active_status}</div>
        <img src={img} alt='employee' className='img' />
        <div className="item-count">{sale_item_count}</div>
        
      </div>
      <div className="salesTeamCard-body">
        <div className="body-header">
          <div className="name">{salesman_name}</div>
          <div className="department">{department}</div>
        </div>
        <div className="position">{position}</div>
      </div>
    </div>
  )
}

export default SalesTeamCard;
