import { combineReducers, legacy_createStore } from "redux";
import productReducer from "./Reducers/ProductReducer";
import customersReducer from "./Reducers/CustomersReducer";
import serviceReducer from "./Reducers/ServiceReducer";
import orderReducer from "./Reducers/OrderReducer";
import salesReducer from "./Reducers/SalesReducer";
import adminReducer from "./Reducers/AdminReducer";

const rootReducer = combineReducers({
  products: productReducer,
  customers: customersReducer,
  service: serviceReducer,
  order: orderReducer,
  sales: salesReducer,
  admin: adminReducer,
});

const Store = legacy_createStore(rootReducer);

export default Store;
