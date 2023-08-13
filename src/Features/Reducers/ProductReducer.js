import { ACTION_TYPES } from "../Actions/Products.action"

const initial_state = {
  total_products: 0,
}

const productReducer = (state = initial_state, action) => {
  switch(action.type) {
    case ACTION_TYPES.TOTAL_PRODUCTS:
      return {
        ...state,
        total_products: action.payload,
      }
    default: return state;
  }
};

export default productReducer;