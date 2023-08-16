export const CUSTOMERS_TABLE_COLUMNS = [
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
  }
];

// TODO 
export const customersMockdata = [
  {
    customer_id: "001",
    customer_name: 'Selvaganesh',
    city: 'Chennai',
    state: 'Tamil nadu',
    email: 'selvaganesh@gmail.com',
    phone_number: '8976978723',
    pin_code: 600032,
  },
  {
    customer_id: "002",
    customer_name: 'Dharunkumar',
    city: 'Tambaram',
    state: 'Tamil nadu',
    email: 'dharun@gmail.com',
    phone_number: '8976973423',
    pin_code: 600043,
  },
  {
    customer_id: "003",
    customer_name: 'Pradeep',
    city: 'Guindy',
    state: 'Tamil nadu',
    email: 'pradeep@gmail.com',
    phone_number: '9766978723',
    pin_code: 600012,
  },
  {
    customer_id: "004",
    customer_name: 'Edward',
    city: 'Madurai',
    state: 'Tamil nadu',
    email: 'edward@gmail.com',
    phone_number: '8976978723',
    pin_code: 620132,
  },
  {
    customer_id: "005",
    customer_name: 'Hari',
    city: 'Kovilpatti',
    state: 'Tamil nadu',
    email: 'hari@gmail.com',
    phone_number: '9283478723',
    pin_code: 628501,
  },
];
