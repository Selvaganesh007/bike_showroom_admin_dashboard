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
    width: 110,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    width: 110,
  },
  {
    title: "Order status",
    dataIndex: "order_status",
    key: "order_status",
    width: 110,
  },
  {
    title: "Customer Name",
    dataIndex: "customer_details",
    key: "customer_details",
    render: (data) => data?.customer_name,
    width: 110,
  },
  {
    title: "Product Name",
    dataIndex: "bike_details",
    key: "bike_details",
    render: (data) => data?.product_name,
    width: 110,
  },
]