export const ACTION_TYPES = {
  CUSTOMERS_DETAILS: 'CUSTOMERS_DETAILS',
  ADD_CUSTOMER: 'ADD_CUSTOMER',
}

export const customersDetailsUpdate = (data) => {
  return {
    type: ACTION_TYPES.CUSTOMERS_DETAILS,
    payload: data,
  }
};

export const addCustomer = (data) => {
  return {
    type: ACTION_TYPES.ADD_CUSTOMER,
    payload: data,
  }
}
