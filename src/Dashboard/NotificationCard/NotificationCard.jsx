import React, { useState } from "react";
import "./NotificationCard.scss";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { connect } from "react-redux";
import { serviceDetailsUpdate } from "../../Features/Actions/Service.action";
import { Button, Modal } from "antd";

const NotificationCard = ({
  data,
  notificationList = [],
  updateServiceDetails,
}) => {
  const {
    customer_details: { customer_name, customer_id },
  } = data;

  const [modalDetails, setModalDetails] = useState({
    type: '',
    open: false,
    title: "",
    modalText: "",
  });

  const handleNotificationAction = (type) => {
    if (type === "accept") {
      setModalDetails({
        type: 'accept',
        open: true,
        title: "Confirmation",
        modalText: "Are you accept the service?",
      });
    } else if (type === "decline") {
      setModalDetails({
        type: 'decline',
        open: true,
        title: "Confirmation",
        modalText: "Are you sure decline the service?",
      });
    }
  };

  const handleConfirmation = (type) => {
    const statusUpdatedData = notificationList.filter((val) => {
      const updatedData = [];
      if (val.customer_details.customer_id === customer_id) {
        (type === 'accept') ? val.service_status = "Accepted" : val.service_status = "Decline";
        updatedData.push(...updatedData, val);
      } else {
        updatedData.push(...updatedData, val);
      }
      return updatedData;
    });
    updateServiceDetails(statusUpdatedData);
    setModalDetails({ ...modalDetails, open: false });
  };

  return (
    <div className="NotificationCard">
      <div className="notification-header">
        <MdOutlineNotificationsActive />
        <h3>Dear Admin!</h3>
        <div className="notification-actions">
          <Button
            type="primary"
            size="small"
            onClick={() => handleNotificationAction("accept")}
          >
            Accept
          </Button>
          {/* <Button
            type="primary"
            danger
            size="small"
            onClick={() => handleNotificationAction("decline")}
          >
            Decline
          </Button> */}
        </div>
      </div>
      <p>
        A new bike service request has been submitted by a{" "}
        <b>
          {customer_name}({customer_id}).
        </b>
      </p>
      <Modal
        title={modalDetails.title}
        open={modalDetails.open}
        onOk={() => handleConfirmation(modalDetails.type)}
        // confirmLoading={confirmLoading}
        onCancel={() => setModalDetails({ ...modalDetails, open: false })}
      >
        <p>{modalDetails.modalText}</p>
      </Modal>
    </div>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    updateServiceDetails: (data) => dispatch(serviceDetailsUpdate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCard);
