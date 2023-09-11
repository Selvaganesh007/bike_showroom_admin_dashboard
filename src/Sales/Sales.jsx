import React from 'react';
import './Sales.scss';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { SALES_TABLE_COLUMNS } from './Sales.constants';
import SalesTeamCard from './SalesTeamCard/SalesTeamCard';

const Sales = ({ salesDetails, salesPersonsDetails }) => {
  return (
    <div className='Sales'>
      <div className='sales-header'>
        <h3>Sales Team</h3>
        <div className='sales-cards'>
        {
          salesPersonsDetails.map(val => <SalesTeamCard data={val} />)
        }
        </div>
      </div>
      <h3>Sales</h3>
      <div className="sales_table">
        <Table
          columns={SALES_TABLE_COLUMNS}
          dataSource={salesDetails}
          pagination={false}
          scroll={{x:1000, y: 400}}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    salesDetails: state.sales.sales_details,
    salesPersonsDetails: state.sales.salesPersons_details,
  }
};

const mapDispatchToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
