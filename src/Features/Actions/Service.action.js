export const ACTION_TYPES = {
  SERVICES_DETAILS: 'SERVICES_DETAILS',
  SERVICE_PERSONS: 'SERVICE_PERSONS'
}

export const serviceDetailsUpdate = (data) => {
  return {
    type: ACTION_TYPES.SERVICES_DETAILS,
    payload: data,
  }
};

export const servicePersonsUpdate = (data) => {
  return {
    type: ACTION_TYPES.SERVICE_PERSONS,
    payload: data,
  }
};
