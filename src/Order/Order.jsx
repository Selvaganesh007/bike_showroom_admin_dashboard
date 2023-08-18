import React from 'react';
import './Order.scss';
import { Table } from 'antd';
import { ORDER_TABLE_COLUMNS } from './Order.constants';
import { connect } from 'react-redux';

const Order = ({ orderDetails = [] }) => {
  return (
    <div className='order'>
      <h3>Order</h3>
      <div className="order_table">
        <Table
          columns={ORDER_TABLE_COLUMNS}
          dataSource={orderDetails}
          pagination={false}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    orderDetails: state.order.order_details,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);