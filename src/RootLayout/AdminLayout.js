import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Admin/Sections/NavBar/NavBar";
import LeftPanel from "../Admin/Sections/LeftPanel/LeftPanel";
import { connect } from "react-redux";
import { customersMockdata, serviceDetailsMockData, productMockData, orderDetailsMockData } from "../mockdata";
import { productsDetailsUpdate } from "../Features/Actions/Products.action";
import { customersDetailsUpdate } from "../Features/Actions/Customers.action";
import { serviceDetailsUpdate } from "../Features/Actions/Service.action";
import { orderDetailsUpdate } from "../Features/Actions/Order.action";

const AdminLayout = ({ fetchProductDetail, fetchCustomersDetail, fetchServicePendingDetails, fetchOrderDetails }) => {

  useEffect(() => {
    fetchProductDetail(productMockData);
    fetchCustomersDetail(customersMockdata);
    fetchServicePendingDetails(serviceDetailsMockData);
    fetchOrderDetails(orderDetailsMockData);
  }, []);

  return (
    <>
      <div>
        <NavBar />
        <div>
          <LeftPanel />
        </div>
      </div>
      <Outlet />
    </>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductDetail: (data) => dispatch(productsDetailsUpdate(data)),
    fetchCustomersDetail: (data) => dispatch(customersDetailsUpdate(data)),
    fetchServicePendingDetails: (data) => dispatch(serviceDetailsUpdate(data)),
    fetchOrderDetails: (data) => dispatch(orderDetailsUpdate(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
