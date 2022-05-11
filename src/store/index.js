import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { loginReducer } from "./Login/reducer";
import { userReducer } from "./User/reducer";

const reducer = combineReducers({ login: loginReducer, user: userReducer });

export const store = configureStore({
  reducer,
});
