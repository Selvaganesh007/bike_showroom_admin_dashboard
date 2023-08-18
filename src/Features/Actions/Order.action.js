export const ACTION_TYPES = {
  ORDER_DETAILS: 'ORDER_DETAILS',
  ADD_ORDER: 'ADD_ORDER',
}

export const orderDetailsUpdate = (data) => {
  return {
    type: ACTION_TYPES.ORDER_DETAILS,
    payload: data,
  }
};

export const addOrder = (data) => {
  return {
    type: ACTION_TYPES.ADD_ORDER,
    payload: data,
  }
}