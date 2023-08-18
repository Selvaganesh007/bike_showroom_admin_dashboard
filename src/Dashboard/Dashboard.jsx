import React from "react";
import "./Dashboard.scss";
import { connect } from "react-redux";
import HeaderCard from "./HeaderCard/HeaderCard";
import { dashboardCards } from "./DashBoard.constants";
import NotificationCard from "./NotificationCard/NotificationCard";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Dashboard = ({ products, serviceDetails }) => {
  const { product_details = [] } = products;

  const data = {
    labels: product_details.map(val => val.product_name) || [],
    datasets: [
      {
        label: "Available Products",
        backgroundColor: "#45A293",
        borderColor: "#0B0C10",
        data: product_details.map(val => val.available_qty) || [],
      },
    ],
  };

  const dashBoardHeaderCards = () => {
    return dashboardCards.map(({card_name, item_count, icon}) => {
      if (card_name === 'Products') {
        return <HeaderCard card_name={card_name} item_count={product_details?.length} icon={icon} />;
      } else {
        return <HeaderCard card_name={card_name} item_count={item_count} icon={icon} />;
      }
    })
  }

  return (
    <div className="dashboard">
      <div className="dashboardCard">
        {dashBoardHeaderCards()}
      </div>
      <div className="dashboard_body">
        <div className="dashboard_body-service_notifications">
          <h3>Service Notifications</h3>
          <div className="dashboard_body-service_notifications_card">
            {
              (serviceDetails || []).map(val => val.service_status === 'pending' && <NotificationCard data={val} notificationList={serviceDetails} />)
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
    serviceDetails: state.service.service_details,
  };
};

export default connect(mapStateToProps)(Dashboard);
