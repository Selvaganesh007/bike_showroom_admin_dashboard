import { Button } from "antd";
import './Customers.scss';

export const DRAWER_ACTIONS = {
  edit_title: "Edit customer",
  add_new_title: "Add new customer",
}

export const CUSTOMERS_TABLE_COLUMNS = (handleEdit, deleteConfirmation) => [
  {
    title: "Customer ID",
    dataIndex: "customer_id",
    key: "customer_id",
  },
  {
    title: "Customer Name",
    dataIndex: "customer_name",
    key: "customer_name",
    // render: (data) => data,
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: "Pin code",
    dataIndex: "pin_code",
    key: "pin_code",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (_, data) => (
      <div className="tableAction">
        <Button type="primary" onClick={() => handleEdit(data)}>
          Edit
        </Button>
        <Button type="primary" onClick={() => deleteConfirmation(data)} danger>
          Delete
        </Button>
      </div>
    ),
  },
];
