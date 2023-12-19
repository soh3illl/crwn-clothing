import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains the product
    const existingCartItem = cartItems.find(
        (item) => item.id === productToAdd.id,
    );
    // if found , increment the quantity
    if (existingCartItem) {
        return cartItems.map((item) => {
            if (item.id === existingCartItem.id) {
                return {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
            }

            return item;
        });
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, item) => {
    if (item.quantity > 1) {
        return cartItems.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem,
        );
    }

    return cartItems.filter((cartItem) => item.id !== cartItem.id);
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        deleteProductFromCart(state, action) {
            const { payload: item } = action;

            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== item.id,
            );
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    deleteProductFromCart,
    setIsCartOpen,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
