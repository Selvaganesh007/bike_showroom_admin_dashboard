import React, { useEffect, useState } from 'react';
import './Customers.scss';
import { Button, Table } from 'antd';
import { CUSTOMERS_TABLE_COLUMNS, customersMockdata } from './Customers.constants';
import AddCustomerDrawer from './AddCustomerDrawer';

const initial_state = {
  customer_name: "",
  gender: "",
  date_of_birth: "",
  email: "",
  phone_number: "",
  city: "",
  state: "",
  pin_code: '',
}

const Customers = () => {
  const [draweropen, setDraweropen] = useState(false);
  const [customerdetails, setCustomerDetail] = useState(initial_state);

  useEffect(() => {
    setCustomerDetail(initial_state);
  }, [draweropen]);

  const handleAddCustomer = () => {
    setCustomerDetail(initial_state);
    setDraweropen(false);
    // TODO add customer redux
  };

  return (
    <div className='Customers'>
      <div className='customers_header'>
        <h3>Customers</h3>
        <Button
          type='primary'
          onClick={() => setDraweropen(true)}
        >
          Add new customer
        </Button>
      </div>
      <Table
        columns={CUSTOMERS_TABLE_COLUMNS}
        dataSource={customersMockdata}
        pagination={false}
      />
      <AddCustomerDrawer
        drawerOpen={draweropen}
        onDrawerClose={setDraweropen}
        customerdetails={customerdetails}
        setCustomerDetail={setCustomerDetail}
        handleAddCustomer={handleAddCustomer}
      />
    </div>
  )
}

export default Customers;