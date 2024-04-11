import { Button, Drawer, Input, InputNumber, Select, Space } from "antd";
import React from "react";
import { SALESMAN_POSITIONS } from "../Sales.constants";

const INITIAL_STATE = {
  alesman_name: "",
  experience: "",
  position: "",
}

class AddSalesManDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      salesManDetails: INITIAL_STATE,
    };
  }

  handleSalesmanDetailChange = (value, field) => {
    if (field === "salesman_name") {
      this.setState({
        salesManDetails: { ...this.state.salesManDetails, salesman_name: value },
      });
    } else if (field === "position") {
      this.setState({
        salesManDetails: { ...this.state.salesManDetails, position: value },
      });
    } else if (field === "experience") {
      this.setState({
        salesManDetails: { ...this.state.salesManDetails, experience: value },
      });
    }
  };

  handleAddSalesman = () => {
    //
    this.props.onDrawerClose(false);
    this.setState({ salesManDetails: INITIAL_STATE })
  }

  render() {
    const { drawerOpen, onDrawerClose } =
      this.props;
    const {
      salesManDetails: { salesman_name, experience, position },
    } = this.state;
    return (
      <div>
        <Drawer
          title="Add New Salesman"
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
            placeholder="Salesman Name"
            value={salesman_name}
            onChange={(e) =>
              this.handleSalesmanDetailChange(e.target.value, "salesman_name")
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
              (SALESMAN_POSITIONS || []).map((val) => {
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

export default AddSalesManDrawer;
