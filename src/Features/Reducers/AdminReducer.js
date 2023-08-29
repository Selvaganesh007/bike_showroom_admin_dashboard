import { ACTION_TYPES } from "../Actions/Access.action";

const initial_state = {
  admin_details: {},
}

const adminReducer = (state = initial_state, action) => {
  switch(action.type) {
    case ACTION_TYPES.ADMIN_DETAILS:
      return {
        ...state,
        admin_details: action.payload,
      }
    default: return state;
  }
};

export default adminReducer;
