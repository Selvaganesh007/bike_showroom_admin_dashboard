export const ACTION_TYPES = {
  SERVICES_DETAILS: 'SERVICES_DETAILS',
}

export const serviceDetailsUpdate = (data) => {
  return {
    type: ACTION_TYPES.SERVICES_DETAILS,
    payload: data,
  }
};
