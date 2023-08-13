import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      PageNotFound 404
      <div>
        <NavLink to='login'>Login</NavLink>
      </div>
    </div>
  )
}

export default PageNotFound;
