import React, { useEffect } from "react";
import Login from "./Login/Login";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements   } from "react-router-dom";
import AdminLayout from "./RootLayout/AdminLayout";
import Dashboard from "./Dashboard/Dashboard";
import Products from "./Products/Products";
import PageNotFound from "./RootLayout/PageNotFound";
import Order from "./Order/Order";
import Customers from "./Customers/Customers";
import Service from "./Service/Service";
import Sales from "./Sales/Sales";
import { connect } from "react-redux";
import { adminDetailsUpdate } from "./Features/Actions/Access.action";
import MyProfile from "./RootLayout/MyProfile";

function Base({ updateAdminDetail }) {

  useEffect(() => {
    const adminDetail = sessionStorage.getItem("adminDetails");
    updateAdminDetail(JSON.parse(adminDetail));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/bike_showroom_admin_dashboard" element={<Login />} />
        <Route path="admin-panel" element={<AdminLayout />}>
          <Route path="dash_board" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="order" element={<Order />} />
          <Route path="customers" element={<Customers />} />
          <Route path="service" element={<Service />} />
          <Route path="sales" element={<Sales />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAdminDetail: (data) => dispatch(adminDetailsUpdate(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Base);
