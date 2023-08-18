import React from "react";
import "./Service.scss";
import { Table } from "antd";
import { SERVICE_TABLE_COLUMNS } from "./Service.constants";
import { connect } from "react-redux";

const Service = ({ serviceDetails }) => {
  return (
    <div className="Service">
      <h3>Service</h3>
      <div className="service_table">
        <Table
          columns={SERVICE_TABLE_COLUMNS}
          dataSource={serviceDetails}
          pagination={false}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    serviceDetails: state.service.service_details,
  }
};

const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Service);
