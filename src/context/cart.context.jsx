import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    addItemToCart: () => {},
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };

        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`);
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartOpen, cartItems, cartCount, cartTotal } = state;

    const updateCartItemsReducer = (newCartItems) => {
        const newCartTotal = newCartItems.reduce(
            (acc, item) => (acc += item.quantity * item.price),
            0,
        );

        const newCartCount = newCartItems.reduce(
            (total, item) => total + item.quantity,
            0,
        );

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal,
            }),
        );
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (item) => {
        const newCartItems = removeCartItem(cartItems, item);
        updateCartItemsReducer(newCartItems);
    };

    const deleteProductFromCart = (item) => {
        const newCartItems = cartItems.filter(
            (cartItem) => cartItem.id !== item.id,
        );
        updateCartItemsReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        addItemToCart,
        removeItemFromCart,
        deleteProductFromCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
