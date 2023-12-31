export const SALES_TABLE_COLUMNS = [
  {
    title: "Sales ID",
    dataIndex: "sales_id",
    key: "sales_id",
    width: 110,
  },
  {
    title: "Sales Man",
    dataIndex: "salesman_name",
    key: "salesman_name",
    width: 150,
  },
  {
    title: "Product",
    dataIndex: "bike_details",
    key: "bike_details",
    render: (data) => data?.product_name,
    width: 150,
  },
  {
    title: "Amount",
    dataIndex: "bike_details",
    key: "bike_details",
    render: (data) => `₹ ${data?.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    width: 150,
  },
  {
    title: "Customer Name",
    dataIndex: "customer_details",
    key: "customer_details",
    render: (data) => data?.customer_name,
    width: 150,
  },
  {
    title: "Delivery Date",
    dataIndex: "delivery_date",
    key: "delivery_date",
    width: 150,
  },
];

export const SALES_PERSONS = [
  {
    salesman_name: 'Ram G',
    salesman_id: 7864500,
    position: 'Chief sales officer',
    Experience: '8 Years',
    sale_item_count: 192,
    department: 'Sales',
    active_status: 'Active',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    salesman_name: 'Siva M',
    salesman_id: 7864501,
    position: 'Senior Sales Executive',
    Experience: '5 Years',
    sale_item_count: 128,
    department: 'Sales',
    active_status: 'Active',
    img: 'https://images.unsplash.com/photo-1602133187081-4874fdbd555c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    salesman_name: 'Robert J',
    salesman_id: 7864502,
    position: 'Junior Sales Executive',
    Experience: '1 Year',
    sale_item_count: 15,
    department: 'Sales',
    active_status: 'In-active',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
];