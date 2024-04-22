import React from "react";
import "./Products.scss";
import { Table } from "antd";
import { PRODUCT_TABLE_COLUMNS } from "./Products.constants";
import { connect } from "react-redux";

const Products = ({ productDetail }) => {
  return (
    <div className="products">
      <h3>Products</h3>
      <div className="products_table">
        <Table
          columns={PRODUCT_TABLE_COLUMNS}
          dataSource={productDetail}
          pagination={false}
          scroll={{x:1600, y: 400}}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetail: state.products.product_details,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
