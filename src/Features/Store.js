import { combineReducers, legacy_createStore } from "redux";
import productReducer from "./Reducers/ProductReducer";
import customersReducer from "./Reducers/CustomersReducer";
import serviceReducer from "./Reducers/ServiceReducer";
import orderReducer from "./Reducers/OrderReducer";

const rootReducer = combineReducers({
  products: productReducer,
  customers: customersReducer,
  service: serviceReducer,
  order: orderReducer,
});

const Store = legacy_createStore(rootReducer);

export default Store;
