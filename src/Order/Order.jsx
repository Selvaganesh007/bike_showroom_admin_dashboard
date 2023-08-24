import React, { useEffect, useState } from "react";
import "./Order.scss";
import { Button, Table, notification } from "antd";
import { ORDER_TABLE_COLUMNS, initial_state } from "./Order.constants";
import { connect } from "react-redux";
import NewBookingDrawer from "./drawer/NewBookingDrawer";
import { addNewBooking } from "../Features/Actions/Order.action";

const Order = ({ orderDetails = [], addNewOrder }) => {
  const [draweropen, setDraweropen] = useState(false);
  const [orderDetail, setOrderDetail] = useState(initial_state);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (key, message) => {
    if (key === "success") {
      api.success({
        key: key,
        message: "Success",
        description: message,
        placement: "bottomRight",
        bottom: 50,
        duration: 3,
      });
    } else if (key === "error") {
      api.error({
        key: key,
        message: "Error",
        description: message,
        placement: "bottomRight",
        bottom: 50,
        duration: 3,
      });
    }
  };

  useEffect(() => {
    setOrderDetail(initial_state);
  }, [draweropen]);

  const handleAddNewOrder = () => {
    if (Object.values(orderDetail).every((val) => val !== "")) {
      addNewOrder(orderDetail);
      setOrderDetail(initial_state);
      setDraweropen(false);
      openNotification("success", `${orderDetail?.customer_details?.customer_name}'s Order booking successfully`);
    } else {
      openNotification("error", "Kindly fill all mandatory fields");
    }
  };
  return (
    <div className="order">
      <div className="order_header">
        <h3>Order</h3>
        <Button type="primary" onClick={() => setDraweropen(true)}>
          New Booking
        </Button>
      </div>
      <div className="order_table">
        <Table
          columns={ORDER_TABLE_COLUMNS}
          dataSource={orderDetails}
          pagination={false}
          scroll={{x:1300, y: 400}}

        />
      </div>
      <NewBookingDrawer
        drawerOpen={draweropen}
        onDrawerClose={setDraweropen}
        orderDetail={orderDetail}
        setOrderDetail={setOrderDetail}
        handleAddNewOrder={handleAddNewOrder}
        orderDetails={orderDetails}
      />
      {contextHolder}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orderDetails: state.order.order_details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewOrder: (data) => dispatch(addNewBooking(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
