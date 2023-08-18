import { ACTION_TYPES } from "../Actions/Service.action"

const initial_state = {
  service_details: [],
}

const serviceReducer = (state = initial_state, action) => {
  switch(action.type) {
    case ACTION_TYPES.SERVICES_DETAILS:
      return {
        ...state,
        service_details: action.payload,
      }
    default: return state;
  }
};

export default serviceReducer;
