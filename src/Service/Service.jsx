import React, { useEffect, useState } from "react";
import "./Service.scss";
import { Button, Table } from "antd";
import { SERVICE_TABLE_COLUMNS } from "./Service.constants";
import { connect } from "react-redux";
import AddMechanicDrawer from "./ServiceDrawer/AddMechanicDrawer";
import TeamMemberCard from "../Cards/SalesTeamCard/TeamMemberCard";
import { url } from "../api";
import { servicePersonsUpdate } from "../Features/Actions/Service.action";

const Service = ({ serviceDetails, servicePersonsDetails, fetchServicePersonsDetails }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    url.getMechanicDetails().then(data => fetchServicePersonsDetails(data)).catch((err) => console.log(err));
  }, [])

  return (
    <div className="Service">
      <div className="service-header">
        <div className="service-header-title">
          <h3>Service Team</h3>
          <Button onClick={() => setDrawerOpen(true)} type="primary">
            Add Mechanic
          </Button>
        </div>
        <div className="service-cards">
          {(servicePersonsDetails || []).map((val) => (
            <TeamMemberCard
              img={val.img}
              position={val.position}
              taskItemCount={val.service_item_count}
              department={val.department}
              activeStatus={val.active_status}
              memberName={val.mechanic_name}
            />
          ))}
        </div>
      </div>
      <h3>Service</h3>
      <div className="service_table">
        <Table
          columns={SERVICE_TABLE_COLUMNS}
          dataSource={serviceDetails}
          pagination={false}
        />
      </div>
      <AddMechanicDrawer
        drawerOpen={drawerOpen}
        onDrawerClose={setDrawerOpen}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    serviceDetails: state.service.service_details,
    servicePersonsDetails: state.service.servicePersons_details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServicePersonsDetails: (data) => dispatch(servicePersonsUpdate(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
