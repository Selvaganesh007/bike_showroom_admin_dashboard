import { Button, Drawer, Input, InputNumber, Select, Space } from "antd";
import React from "react";
import { MECHANIC_POSITIONS } from "../Service.constants";

const INITIAL_STATE = {
  mechanic_name: "",
  experience: "",
  position: "",
}

class AddMechanicDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      mechanicDetails: INITIAL_STATE,
    };
  }

  handleSalesmanDetailChange = (value, field) => {
    if (field === "mechanic_name") {
      this.setState({
        mechanicDetails: { ...this.state.mechanicDetails, mechanic_name: value },
      });
    } else if (field === "position") {
      this.setState({
        mechanicDetails: { ...this.state.mechanicDetails, position: value },
      });
    } else if (field === "experience") {
      this.setState({
        mechanicDetails: { ...this.state.mechanicDetails, experience: value },
      });
    }
  };

  handleAddSalesman = () => {
    //
    this.props.onDrawerClose(false);
    this.setState({ mechanicDetails: INITIAL_STATE })
  }

  render() {
    const { drawerOpen, onDrawerClose } =
      this.props;
    const {
      mechanicDetails: { mechanic_name, experience, position },
    } = this.state;
    return (
      <div>
        <Drawer
          title="Add New Mechanic"
          placement="right"
          width={500}
          onClose={() => onDrawerClose(false)}
          open={drawerOpen}
          extra={
            <Space>
              <Button onClick={() => onDrawerClose(false)}>Cancel</Button>
              <Button type="primary" onClick={() => this.handleAddSalesman()}>
                Add
              </Button>
            </Space>
          }
        >
          <span>Salesman Name:*</span>
          <Input
            placeholder="Mechanic Name"
            value={mechanic_name}
            onChange={(e) =>
              this.handleSalesmanDetailChange(e.target.value, "mechanic_name")
            }
          />
          <span>Position:*</span>
          <Select
            style={{ width: "100%" }}
            placeholder="Select Customer"
            onChange={(value) =>
              this.handleSalesmanDetailChange(value, "position")
            }
            value={position}
            options={
              (MECHANIC_POSITIONS || []).map((val) => {
                return {
                  value: val.position_id,
                  label: `${val.position_name}`,
                };
              }) || []
            }
          />
          <span>Years of experience:*</span>
          <InputNumber
            placeholder="Years of experience"
            style={{ width: "100%" }}
            onChange={(e) => this.handleSalesmanDetailChange(e, "experience")}
            value={experience}
          />
        </Drawer>
      </div>
    );
  }
}

export default AddMechanicDrawer;
