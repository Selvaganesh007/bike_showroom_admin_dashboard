import { ACTION_TYPES } from "../Actions/Order.action";

const initial_state = {
  order_details: [],
}

const orderReducer = (state = initial_state, action) => {
  switch(action.type) {
    case ACTION_TYPES.ORDER_DETAILS:
      return {
        ...state,
        order_details: action.payload,
      }
    default: return state;
  }
};

export default orderReducer;