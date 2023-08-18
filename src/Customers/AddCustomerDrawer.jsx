import {
  Button,
  DatePicker,
  Drawer,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd";
import { GENDER_LIST, STATE_DATA } from "../helper";

const AddCustomerDrawer = ({
  drawerOpen,
  onDrawerClose,
  customerdetails,
  setCustomerDetail,
  handleAddCustomer,
  customers_details
}) => {
  const handleCustomerDetailChange = (value, field) => {
    switch (field) {
      case "customer_name":
        return setCustomerDetail({ ...customerdetails, customer_name: value, customer_id: customers_details.length + 2001 });
      case "gender":
        return setCustomerDetail({ ...customerdetails, gender: value });
      case "date_of_birth":
        return setCustomerDetail({ ...customerdetails, date_of_birth: value });
      case "email":
        return setCustomerDetail({ ...customerdetails, email: value });
      case "phone_number":
        return setCustomerDetail({ ...customerdetails, phone_number: value });
      case "city":
        return setCustomerDetail({ ...customerdetails, city: value });
      case "state":
        return setCustomerDetail({ ...customerdetails, state: value });
      case "pin_code":
        return setCustomerDetail({ ...customerdetails, pin_code: value });
      default:
        return;
    }
  };

  const {
    customer_name,
    gender,
    date_of_birth,
    email,
    phone_number,
    city,
    state,
    pin_code,
  } = customerdetails;

  return (
    <div>
      <Drawer
        title="Add New Customer"
        placement="right"
        width={500}
        onClose={() => onDrawerClose(false)}
        open={drawerOpen}
        extra={
          <Space>
            <Button onClick={() => onDrawerClose(false)}>Cancel</Button>
            <Button type="primary" onClick={() => handleAddCustomer()}>
              Add
            </Button>
          </Space>
        }
      >
        <span>Customer Name:*</span>
        <Input
          placeholder="Customer Name"
          value={customer_name}
          onChange={(e) =>
            handleCustomerDetailChange(e.target.value, "customer_name")
          }
        />
        <span>Gender:*</span>
        <Select
          style={{ width: "100%" }}
          placeholder="Gender"
          onChange={(value) => handleCustomerDetailChange(value, "gender")}
          value={gender}
          options={GENDER_LIST}
        />
        <span>Date of birth:*</span>
        <DatePicker
          style={{ width: "100%" }}
          value={date_of_birth}
          format='DD/MM/YYYY'
          onChange={(value) =>
            handleCustomerDetailChange(value, "date_of_birth")
          }
        />
        <span>Email:*</span>
        <Input
          placeholder="Enter customer email"
          value={email}
          onChange={(e) => handleCustomerDetailChange(e.target.value, "email")}
        />
        <span>Phone number:*</span>
        <Input
          placeholder="Enter customer phone number"
          value={phone_number}
          onChange={(e) =>
            handleCustomerDetailChange(e.target.value, "phone_number")
          }
        />
        <span>City:*</span>
        <Input
          style={{ width: "100%" }}
          placeholder="City"
          value={city}
          onChange={(e) => handleCustomerDetailChange(e.target.value, "city")}
        />
        <span>State:*</span>
        <Select
          showSearch
          value={state}
          style={{ width: "100%" }}
          placeholder="Search your state"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          options={STATE_DATA.map((val) => {
            return { value: val, label: val };
          })}
          onChange={(val) => handleCustomerDetailChange(val, "state")}
        />
        <span>Pincode:*</span>
        <InputNumber
          placeholder="Pincode"
          style={{ width: "100%" }}
          onChange={(e) => handleCustomerDetailChange(e, "pin_code")}
          value={pin_code}
        />
      </Drawer>
    </div>
  );
};

export default AddCustomerDrawer;
