
export const ACTION_TYPES = {
  TOTAL_PRODUCTS: 'TOTAL_PRODUCTS',
}

export const totalProduct = (data) => {
  return {
    type: ACTION_TYPES.TOTAL_PRODUCTS,
    payload: data,
  }
};