import React, { useState } from "react";
import "./Sales.scss";
import { connect } from "react-redux";
import { Button, Table } from "antd";
import { SALES_TABLE_COLUMNS } from "./Sales.constants";
import AddSalesManDrawer from "./SalesDrawer/AddSalesManDrawer";
import TeamMemberCard from "../Cards/SalesTeamCard/TeamMemberCard";

const Sales = ({ salesDetails, salesPersonsDetails }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="Sales">
      <div className="sales-header">
        <div className="sales-header-title">
          <h3>Sales Team</h3>
          <Button onClick={() => setDrawerOpen(true)} type="primary">
            Add sales man
          </Button>
        </div>
        <div className="sales-cards">
          {salesPersonsDetails.map((val) => (
            <TeamMemberCard
              img={val.img} 
              position={val.position} 
              taskItemCount={val.sale_item_count}
              department={val.department}
              activeStatus={val.active_status}
              memberName={val.salesman_name} 
            />
          ))}
        </div>
      </div>
      <h3>Sales</h3>
      <div className="sales_table">
        <Table
          columns={SALES_TABLE_COLUMNS}
          dataSource={salesDetails}
          pagination={false}
          scroll={{ x: 1000, y: 400 }}
        />
      </div>
      <AddSalesManDrawer
        drawerOpen={drawerOpen}
        onDrawerClose={setDrawerOpen}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    salesDetails: state.sales.sales_details,
    salesPersonsDetails: state.sales.salesPersons_details,
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
