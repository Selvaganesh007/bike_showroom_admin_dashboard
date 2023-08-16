import React from "react";
import "./Dashboard.scss";
import { connect } from "react-redux";
import HeaderCard from "./HeaderCard/HeaderCard";
import { dashboardCards, notificationList } from "./DashBoard.constants";
import NotificationCard from "./NotificationCard/NotificationCard";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Dashboard = (props) => {
  const { products } = props;

  const labels = ["Hunter", "Bullet", "Meteor", "Classic", "Himalayan", "Scrm 11"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Available Products",
        backgroundColor: "#45A293",
        borderColor: "#0B0C10",
        data: [2,1,3,5,3,2],
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="dashboardCard">
        {dashboardCards.map((val) => {
          return <HeaderCard data={val} />;
        })}
      </div>
      <div className="dashboard_body">
        <div className="dashboard_body-service_notifications">
          <h3>Service Notifications</h3>
          <div className="dashboard_body-service_notifications_card">
            {
              notificationList.map(val => {
                return <NotificationCard data={val} />
              })
            }
          </div>
        </div>
        <div className="dashboard_body-product_details">
          <h3>Products Details</h3>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Dashboard);
