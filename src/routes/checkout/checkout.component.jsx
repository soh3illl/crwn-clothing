import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cart.selector.js";
// components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// styled components
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from "./checkout.styles";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
            ))}
            <Total>Total : {total}$</Total>
        </CheckoutContainer>
    );
};

export default Checkout;
