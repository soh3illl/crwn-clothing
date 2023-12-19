import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer.js";
import { cartReducer } from "./cart/cart.reducer.js";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
});
