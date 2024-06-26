import { ACTION_TYPES } from "../Actions/Sales.action";

const initial_state = {
  sales_details: [],
  salesPersons_details: [],
};

const salesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SALES_DETAILS:
      return {
        ...state,
        sales_details: action.payload,
      };
    case ACTION_TYPES.SALES_PERSONS:
      return {
        ...state,
        salesPersons_details: action.payload,
      };
    default:
      return state;
  }
};

export default salesReducer;
