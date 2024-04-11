import React from 'react';
import './TeamMemberCard.scss';

const TeamMemberCard = ({ memberName, img, position, taskItemCount, department, activeStatus }) => {
  return (
    <div className='TeamMemberCard'>
      <div className="TeamMember-header">
        <div className={activeStatus === 'Active' ? "status-active" : 'status-in-active'}>{activeStatus}</div>
        <img src={img} alt='employee' className='img' />
        <div className="item-count">{taskItemCount}</div>
      </div>
      <div className="TeamMember-body">
        <div className="body-header">
          <div className="name">{memberName}</div>
          <div className="department">{department}</div>
        </div>
        <div className="position">{position}</div>
      </div>
    </div>
  )
}

export default TeamMemberCard;
