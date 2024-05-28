export const url = {
  getProducts: () =>
    APICall(`${process.env.REACT_APP_BASE_URL}/products`, "GET"),
  getCustomersDetails: () =>
    APICall(
      `${process.env.REACT_APP_BASE_URL}/customers/customersDetails`,
      "GET"
    ),
  addCustomer: () =>
    APICall(`${process.env.REACT_APP_BASE_URL}/customers/addCustomer`, "POST"),
  editCustomer: (customerId, payload) => APICall(`${process.env.REACT_APP_BASE_URL}/customers/editCustomer/${customerId}`, "PUT", payload),
  deleteCustomer: (customerId) => APICall(`${process.env.REACT_APP_BASE_URL}/customers/deleteCustomer/${customerId}`, "DELETE"),
  getOrderDetails: () =>
    APICall(`${process.env.REACT_APP_BASE_URL}/order/orderDetails`, "GET"),
  newOrder: (orderId, payload) =>
    APICall(
      `${process.env.REACT_APP_BASE_URL}/order/newOrder/${orderId}`,
      "POST",
      payload
    ),
  addSalesman: (payload) =>
    APICall(
      `${process.env.REACT_APP_BASE_URL}/sales/addSalesman`,
      "POST",
      payload
    ),
  getSalesmanDetails: () =>
    APICall(`${process.env.REACT_APP_BASE_URL}/sales/salesmanDetails`, "GET"),
  getSalesDetails: () =>
    APICall(`${process.env.REACT_APP_BASE_URL}/sales/salesDetails`, "GET"),
  getMechanicDetails: () =>
    APICall(
      `${process.env.REACT_APP_BASE_URL}/service/servicemanDetails`,
      "GET"
    ),
  getServiceDetails: () =>
    APICall(`${process.env.REACT_APP_BASE_URL}/service/serviceDetails`, "GET"),
  addMechanic: (payload) =>
    APICall(
      `${process.env.REACT_APP_BASE_URL}/service/addMechanic`,
      "POST",
      payload
    ),
};

const APICall = async (url, method, payload) => {
  if (method === "GET" || "DELETE") {
    const data = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(data => data).catch(err => err);
    return data;
  } else if (method === "POST" || "PUT") {
    const data = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(res => res.json()).then(data => data).catch(err => err);
    return data;
  }
};