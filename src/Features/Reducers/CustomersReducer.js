import { ACTION_TYPES } from "../Actions/Customers.action";

const initial_state = {
  customers_details: [],
}

const customersReducer = (state = initial_state, action) => {
  switch(action.type) {
    case ACTION_TYPES.CUSTOMERS_DETAILS:
      return {
        ...state,
        customers_details: action.payload,
      }
    case ACTION_TYPES.ADD_CUSTOMER:
      return {
        ...state,
        customers_details: [...state.customers_details, action.payload]
      }
    default: return state;
  }
};

export default customersReducer;