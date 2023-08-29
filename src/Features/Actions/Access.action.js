export const ACTION_TYPES = {
  ADMIN_DETAILS: 'ADMIN_DETAILS',
}

export const adminDetailsUpdate = (data) => {
  return {
    type: ACTION_TYPES.ADMIN_DETAILS,
    payload: data,
  }
};
