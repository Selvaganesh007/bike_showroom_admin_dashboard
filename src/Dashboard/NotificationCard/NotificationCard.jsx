import React, { useEffect, useState } from 'react';
import './NotificationCard.scss';
import { MdOutlineNotificationsActive, MdOutlineClose } from "react-icons/md";

const NotificationCard = ({ data}) => {
  const { notification_for, notification_User, user_id} = data;

  const handleNotificationClose = () => {
    
  };

  return (
    <div className='NotificationCard'>
      <div className='notification-header'>
        <MdOutlineNotificationsActive />
        <h3>Dear {notification_for}!!!</h3>
        <div onClick={() => handleNotificationClose()}><MdOutlineClose /></div>
      </div>
      <p>A new bike service request has been submitted by a {notification_User}. Add new service.</p>
    </div>
  )
}

export default NotificationCard;