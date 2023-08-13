import React from 'react'
import Login from './Login/Login';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout/RootLayout';
import AdminLayout from './RootLayout/AdminLayout';
import Dashboard from './Dashboard/Dashboard';
import Products from './Products/Products';
import PageNotFound from './RootLayout/PageNotFound';
import Order from './Order/Order';
import Customers from './Customers/Customers';
import Service from './Service/Service';
import Sales from './Sales/Sales';

function Base() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='admin-panel' element={<AdminLayout />}>
          <Route path='dash_board' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='order' element={<Order />} />
          <Route path='customers' element={<Customers />} />
          <Route path='service' element={<Service />} />
          <Route path='sales' element={<Sales />} />
        </Route>
        <Route index element={<Login />} />
        <Route index path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Base;
