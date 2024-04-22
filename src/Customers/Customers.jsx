import React, { useState } from "react";
import "./Customers.scss";
import { Button, Modal, Table, notification } from "antd";
import { CUSTOMERS_TABLE_COLUMNS, DRAWER_ACTIONS } from "./Customers.constants";
import AddCustomerDrawer from "./AddCustomerDrawer";
import { connect } from "react-redux";
import { addCustomer } from "../Features/Actions/Customers.action";

const initial_state = {
  customer_id: "",
  customer_name: "",
  gender: "",
  date_of_birth: "",
  email: "",
  phone_number: "",
  city: "",
  state: "",
  pin_code: "",
};

const Customers = ({ customers_details, addNewCustomer }) => {
  const [drawerTitle, setDrawerTitle] = useState(DRAWER_ACTIONS.add_new_title);
  const [draweropen, setDraweropen] = useState(false);
  const [customerdetails, setCustomerDetail] = useState(initial_state);
  const [api, contextHolder] = notification.useNotification();

  const { confirm } = Modal;

  const deleteConfirmation = (data) => {
    confirm({
      title: 'Do you want to delete this customer?',
      content: `customer name: ${data.customer_name} (${data.customer_id})`,
      onOk() {
        // delete api call -> data
        // console.log(data);
      },
    });
  };

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

  const handleActionCustomer = (type) => {
    if (type === DRAWER_ACTIONS.add_new_title) {
      if (Object.values(customerdetails).every((val) => val !== "")) {
        addNewCustomer(customerdetails);
        drawerNew();
        openNotification("success", "New customer Added successfully");
      } else {
        openNotification("error", "Kindly fill all mandatory fields");
      }
    } else {
      if (Object.values(customerdetails).every((val) => val !== "")) {
        // addNewCustomer(customerdetails);
        // edited data -> customerdetails -> edit api call payload
        drawerNew();
        openNotification("success", "Customer edited successfully");
      } else {
        openNotification("error", "Kindly fill all mandatory fields");
      }
    }
  };

  const handleEdit = (data) => {
    setCustomerDetail(data);
    setDrawerTitle(DRAWER_ACTIONS.edit_title);
    setDraweropen(true);
  };

  const drawerNew = () => {
    setDraweropen(true);
    setDrawerTitle(DRAWER_ACTIONS.add_new_title);
    setCustomerDetail(initial_state);
  };

  return (
    <div className="Customers">
      <div className="customers_header">
        <h3>Customers</h3>
        {contextHolder}
        <Button type="primary" onClick={() => drawerNew()}>
          Add new customer
        </Button>
      </div>
      <div className="customer_table">
        <Table
          columns={CUSTOMERS_TABLE_COLUMNS(handleEdit, deleteConfirmation)}
          dataSource={customers_details || []}
          pagination={false}
        />
      </div>
      <AddCustomerDrawer
        drawerOpen={draweropen}
        onDrawerClose={setDraweropen}
        customerdetails={customerdetails}
        setCustomerDetail={setCustomerDetail}
        handleActionCustomer={handleActionCustomer}
        customersDetailsLength={customers_details.length || -2}
        drawerTitle={drawerTitle}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    customers_details: state.customers.customers_details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCustomer: (data) => dispatch(addCustomer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
