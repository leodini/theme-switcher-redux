import { createStore, combineReducers } from "redux";
import layoutReducer from "./layoutReducer";

const rootReducer = combineReducers({ layoutReducer });

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
