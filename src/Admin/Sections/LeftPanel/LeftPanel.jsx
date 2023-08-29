import React from 'react';
import './LeftPanel.scss';
import { LEFT_PANEL_KEYS } from './LeftPanel.constant';
import { NavLink, useLocation } from 'react-router-dom';

const LeftPanel = () => {
  const selectedTab = useLocation();
  return (
    <div className='LeftPanel'>
        {
          LEFT_PANEL_KEYS.map(({ tabName, component, tabKey }) => {
           return <NavLink to={tabKey} className={selectedTab.pathname.slice(13) === tabKey ? 'selectedTab' : 'tab'}>{component} {tabName}</NavLink>
          })
        }
    </div>
  )
};

export default LeftPanel;
