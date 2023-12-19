import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
// componnets
import CartItem from "../cart-item/cart-item.component";
// styled components
import {
    CartDropDownContainer,
    CartItemsContainer,
    Button,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };

    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {cartItems.map((item) => (
                    <CartItem cartItem={item} key={item.id} />
                ))}
            </CartItemsContainer>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    );
};

export default CartDropDown;
