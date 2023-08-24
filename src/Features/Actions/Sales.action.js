export const ACTION_TYPES = {
  SALES_DETAILS: "SALES_DETAILS",
};

export const salesDetailsUpdate = (data) => {
  return {
    type: ACTION_TYPES.SALES_DETAILS,
    payload: data,
  };
};
