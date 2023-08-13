import React from "react";
import "./Products.scss";
import { Table } from "antd";
import { PRODUCT_TABLE_COLUMNS, mockdata } from "./Products.constants";
import { connect } from "react-redux";
import { totalProduct } from "../Features/Actions/Products.action";

const Products = ({ productDetail }) => {
  return (
    <div className="products">
      <h3>Products</h3>
      <Table
        columns={PRODUCT_TABLE_COLUMNS}
        dataSource={mockdata}
        pagination={false}
      />
    </div>
  );
};

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch) => {
  return {
    productDetail: (data) => dispatch(totalProduct(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
