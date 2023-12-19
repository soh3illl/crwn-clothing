import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectIsCartOpen,
    selectCartCount,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.reducer.js";

// styled component
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleCartDropDown = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    };

    return (
        <CartIconContainer onClick={toggleCartDropDown}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
