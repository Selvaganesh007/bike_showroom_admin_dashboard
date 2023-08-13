import React from 'react';
import './Dashboard.scss'
import { connect } from 'react-redux';

const Dashboard = (props) => {
  const { products } = props;
  return (
    <div className='dashboard'>
        Dashboard
        <div>
          Total Product: {products.total_products}
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
};

export default connect(mapStateToProps)(Dashboard);