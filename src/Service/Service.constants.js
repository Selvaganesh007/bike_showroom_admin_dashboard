export const SERVICE_TABLE_COLUMNS = [
  {
    title: "Service ID",
    dataIndex: "service_id",
    key: "service_id",
    width: 110,
  },
  {
    title: "Service Date",
    dataIndex: "service_date",
    key: "service_date",
    width: 110,
  },
  {
    title: "Service attempt",
    dataIndex: "service_attempt",
    key: "service_attempt",
    width: 110,
  },
  {
    title: "Service status",
    dataIndex: "service_status",
    key: "service_status",
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