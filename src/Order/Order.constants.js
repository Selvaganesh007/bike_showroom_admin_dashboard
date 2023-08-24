import moment from "moment/moment";

export const initial_state = {
  order_id: "",
  customer_id: "",
  product_id: "",
  amount: '',
  balance_amount: '',
  order_date: "",
  order_status: '',
  delivery_status: "",
  customer_details: {},
  bike_details: {},
};

export const ORDER_TABLE_COLUMNS = [
  {
    title: "Order ID",
    dataIndex: "order_id",
    key: "order_id",
    width: 110,
  },
  {
    title: "Oder Date",
    dataIndex: "order_date",
    key: "order_date",
    render: (data) => moment(parseInt(data)).format('LL'), 
    width: 160,
  },
  {
    title: "Order status",
    dataIndex: "order_status",
    key: "order_status",
    width: 150,
  },
  {
    title: 'Delivery Status',
    dataIndex: 'delivery_status',
    key: 'delivery_status',
    with: 110,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (data) => `₹ ${data}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    with: 80,
  },
  {
    title: 'Total Amount',
    dataIndex: 'bike_details',
    key: 'bike_details',
    render: (data) => `₹ ${data?.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    with: 80,
  },
  {
    title: 'balance Amount',
    dataIndex: 'balance_amount',
    key: 'balance_amount',
    render: (data) => `₹ ${data}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    with: 80,
  },
  {
    title: "Customer Name",
    dataIndex: "customer_details",
    key: "customer_details",
    render: (data) => data?.customer_name,
    width: 160,
  },
  {
    title: "Product Name",
    dataIndex: "bike_details",
    key: "bike_details",
    render: (data) => data?.product_name,
    width: 160,
  },
];
