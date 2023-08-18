import { ACTION_TYPES } from "../Actions/Products.action"

const initial_state = {
  product_details: [],
}

const productReducer = (state = initial_state, action) => {
  switch(action.type) {
    case ACTION_TYPES.PRODUCTS_DETAILS:
      return {
        ...state,
        product_details: action.payload,
      }
    default: return state;
  }
};

export default productReducer;
