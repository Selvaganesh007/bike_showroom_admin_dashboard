import React, { useEffect, useState } from 'react';
import './Customers.scss';
import { Button, Table, notification } from 'antd';
import { CUSTOMERS_TABLE_COLUMNS } from './Customers.constants';
import AddCustomerDrawer from './AddCustomerDrawer';
import { connect } from 'react-redux';
import { addCustomer } from '../Features/Actions/Customers.action';

const initial_state = {
  customer_id: '',
  customer_name: "",
  gender: "",
  date_of_birth: "",
  email: "",
  phone_number: "",
  city: "",
  state: "",
  pin_code: '',
}

const Customers = ({ customers_details, addNewCustomer }) => {
  const [draweropen, setDraweropen] = useState(false);
  const [customerdetails, setCustomerDetail] = useState(initial_state);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (key, message) => {
    if (key === 'success') {
      api.success({
        key: key,
        message: 'Success',
        description: message,
        placement: 'bottomRight',
        bottom: 50,
        duration: 3,
      });
    } else if (key === 'error') {
      api.error({
        key: key,
        message: 'Error',
        description: message,
        placement: 'bottomRight',
        bottom: 50,
        duration: 3,
      })
    }
  };

  useEffect(() => {
    setCustomerDetail(initial_state);
  }, [draweropen]);

  const handleAddCustomer = () => {
    if (Object.values(customerdetails).every(val => val !== '')) {
      addNewCustomer(customerdetails);
      setCustomerDetail(initial_state);
      setDraweropen(false);
      openNotification('success', 'New customer Added successfully');
    } else {
      openNotification('error','Kindly fill all mandatory fields');
    }
  };

  return (
    <div className='Customers'>
      <div className='customers_header'>
        <h3>Customers</h3>
        {contextHolder}
        <Button
          type='primary'
          onClick={() => setDraweropen(true)}
        >
          Add new customer
        </Button>
      </div>
      <div className='customer_table'>
      <Table
        columns={CUSTOMERS_TABLE_COLUMNS}
        dataSource={customers_details || []}
        pagination={false}
      />
      </div>
      <AddCustomerDrawer
        drawerOpen={draweropen}
        onDrawerClose={setDraweropen}
        customerdetails={customerdetails}
        setCustomerDetail={setCustomerDetail}
        handleAddCustomer={handleAddCustomer}
        customers_details={customers_details}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    customers_details: state.customers.customers_details,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCustomer: (data) => dispatch(addCustomer(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
