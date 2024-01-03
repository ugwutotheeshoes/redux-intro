import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; 

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));
// store.dispatch(requestLoan(1000, "Buy a car"));
// // store.dispatch(payLoan());
// store.dispatch(createCustomer("Emmanuel Ugwu", "12309455"));
// store.dispatch(updateName("Manuel Ugwu"));
// console.log(store.getState());
