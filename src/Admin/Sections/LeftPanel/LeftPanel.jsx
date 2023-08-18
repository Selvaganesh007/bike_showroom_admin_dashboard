import React from 'react';
import './LeftPanel.scss';
import { LEFT_PANEL_KEYS } from './LeftPanel.constant';
import { NavLink } from 'react-router-dom';

const LeftPanel = () => {
  return (
    <div className='LeftPanel'>
        {
          LEFT_PANEL_KEYS.map(({ tabName, component, tabKey }) => {
           return <NavLink to={tabKey} className='tab'>{component} {tabName}</NavLink>
          })
        }
    </div>
  )
};

export default LeftPanel;
