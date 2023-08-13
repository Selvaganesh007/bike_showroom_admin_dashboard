import React from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default RootLayout;