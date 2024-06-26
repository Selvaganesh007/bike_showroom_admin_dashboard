import React from "react";
import "./NewBookingDrawer.scss";
import { Button, Drawer, InputNumber, Select, Space } from "antd";
import { connect } from "react-redux";

const NewBookingDrawer = ({
  drawerOpen,
  onDrawerClose,
  orderDetail,
  setOrderDetail,
  handleAddNewOrder,
  orderDetails,
  customersDetails,
  productDetails,
  salesPersonsDetails,
}) => {
  const handleCustomerDetailChange = (value, field) => {
    switch (field) {
      case "customer_id":
        return setOrderDetail({ ...orderDetail, customer_id: value });
      case "product_id":
        return setOrderDetail({ ...orderDetail, product_id: value });
      case "salesman_name":
        return setOrderDetail({ ...orderDetail, salesman_name: value });
      case "amount":
        const productTotalPrice = parseInt(productDetails.filter(val => val?.product_id === orderDetail?.product_id && val)[0]?.price);
        const balance_amount = productTotalPrice - value;
        if (value > productTotalPrice) return alert(`Product total amount is ${productTotalPrice} only.`);
        return setOrderDetail({
          ...orderDetail,
          amount: value,
          balance_amount: balance_amount,
          order_id: orderDetails.length + 301001,
          order_date: new Date().getTime(),
          order_status: 'Ordered',
          delivery_status: balance_amount === 0 ? 'Ready for delivery' : "Ordered",
          bike_details: productDetails.filter(val => val.product_id === orderDetail.product_id && val)[0],
          customer_details: customersDetails.filter(val => val.customer_id === orderDetail.customer_id && val)[0],
        });
      default: return;
    }
  };

  const { customer_id, product_id, amount, salesman_name } = orderDetail;
  return (
    <div className="newBookingDrawer">
      <Drawer
        title="Add New Order"
        placement="right"
        width={500}
        onClose={() => onDrawerClose(false)}
        open={drawerOpen}
        extra={
          <Space>
            <Button onClick={() => onDrawerClose(false)}>Cancel</Button>
            <Button type="primary" onClick={() => handleAddNewOrder()}>
              Book
            </Button>
          </Space>
        }
      >
        <span>Customer:*</span>
        <Select
          style={{ width: "100%" }}
          placeholder="Select Customer"
          onChange={(value) => handleCustomerDetailChange(value, "customer_id")}
          value={customer_id}
          options={
            customersDetails.map((val) => {
              return {
                value: val.customer_id,
                label: `${val.customer_name} (${val.customer_id})`,
              };
            }) || []
          }
        />
        <span>Product:*</span>
        <Select
          style={{ width: "100%" }}
          placeholder="Select Product"
          onChange={(value) => handleCustomerDetailChange(value, "product_id")}
          value={product_id}
          options={
            productDetails.map((val) => {
              return {
                value: val.product_id,
                label: `${val.product_name} (${val.product_id})`,
              };
            }) || []
          }
        />
        <span>Amount:*</span>
        <InputNumber
          placeholder="Amount"
          style={{ width: "100%" }}
          onChange={(e) => handleCustomerDetailChange(e, "amount")}
          value={amount}
        />
        <span>Sales man:*</span>
        <Select
          style={{ width: "100%" }}
          placeholder="Select Salesman"
          onChange={(value) => handleCustomerDetailChange(value, "salesman_name")}
          value={salesman_name}
          options={
            salesPersonsDetails.map((val) => {
              return {
                value: val.salesman_name,
                label: `${val.salesman_name} (${val.salesman_id})`,
              };
            }) || []
          }
        />
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetails: state.products.product_details,
    customersDetails: state.customers.customers_details,
    salesPersonsDetails: state.sales.salesPersons_details,
  };
};

export default connect(mapStateToProps)(NewBookingDrawer);
