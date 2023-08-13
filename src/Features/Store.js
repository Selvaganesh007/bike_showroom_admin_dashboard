import { combineReducers, legacy_createStore } from "redux";
import productReducer from "./Reducers/ProductReducer";

const rootReducer = combineReducers({
  products: productReducer,
});

const Store = legacy_createStore(rootReducer);

export default Store;