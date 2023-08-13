export const PRODUCT_TABLE_COLUMNS = [
  {
    title: "Product ID",
    dataIndex: "product_id",
    key: "product_id",
  },
  {
    title: "Product Name",
    dataIndex: "product_name",
    key: "product_name",
    // render: (data) => data,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Required Qty",
    dataIndex: "required_qty",
    key: "required_qty",
  },
  {
    title: "Available Qty",
    dataIndex: "available_qty",
    key: "available_qty",
  },
];

// TODO 
export const mockdata = [
  {
    product_id: "1",
    product_name: 'Hunter 350',
    price: '1,98,000',
    status: 'Available',
    required_qty: 4,
    available_qty: 2,
  },
  {
    product_id: "2",
    product_name: 'Classic 350',
    price: '2,40,000',
    status: 'Available',
    required_qty: 8,
    available_qty: 3,
  },
  {
    product_id: "3",
    product_name: 'Meteor 350',
    price: '2,55,000',
    status: 'Available',
    required_qty: 3,
    available_qty: 1,
  },
  {
    product_id: "4",
    product_name: 'Bullet 350',
    price: '1,80,000',
    status: 'Available',
    required_qty: 1,
    available_qty: 0,
  },
  {
    product_id: "5",
    product_name: 'Super Meteor 650',
    price: '3,54,398',
    status: 'Coming soon',
    required_qty: 0,
    available_qty: 2,
  },
];
