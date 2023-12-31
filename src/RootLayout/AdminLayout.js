import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Admin/Sections/NavBar/NavBar";
import LeftPanel from "../Admin/Sections/LeftPanel/LeftPanel";
import { connect } from "react-redux";
import { customersMockdata, serviceDetailsMockData, productMockData, orderDetailsMockData, salesdetailsMockData } from "../mockdata";
import { productsDetailsUpdate } from "../Features/Actions/Products.action";
import { customersDetailsUpdate } from "../Features/Actions/Customers.action";
import { serviceDetailsUpdate } from "../Features/Actions/Service.action";
import { orderDetailsUpdate } from "../Features/Actions/Order.action";
import { salesDetailsUpdate } from "../Features/Actions/Sales.action";

const AdminLayout = ({ fetchProductDetail, fetchCustomersDetail, fetchServicePendingDetails, fetchOrderDetails, fetchSalesdetails }) => {

  useEffect(() => {
    fetchProductDetail(productMockData);
    fetchCustomersDetail(customersMockdata);
    fetchServicePendingDetails(serviceDetailsMockData);
    fetchOrderDetails(orderDetailsMockData);
    fetchSalesdetails(salesdetailsMockData);
  }, []);

  return (
    <>
      <div>
        <NavBar />
        <LeftPanel />
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
    fetchSalesdetails: (data) => dispatch(salesDetailsUpdate(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
