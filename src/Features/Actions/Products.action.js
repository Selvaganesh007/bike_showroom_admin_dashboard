export const ACTION_TYPES = {
  PRODUCTS_DETAILS: 'PRODUCTS_DETAILS'
}

export const productsDetailsUpdate = (data) => {
  return {
    type: ACTION_TYPES.PRODUCTS_DETAILS,
    payload: data,
  }
};