export const ACTION_TYPES = {
  SALES_DETAILS: "SALES_DETAILS",
  SALES_PERSONS: 'SALES_PERSONS',
};

export const salesDetailsUpdate = (data) => {
  return {
    type: ACTION_TYPES.SALES_DETAILS,
    payload: data,
  };
};

export const salesPersonsUpdate = (data) => {
  return {
    type: ACTION_TYPES.SALES_PERSONS,
    payload: data,
  }
}