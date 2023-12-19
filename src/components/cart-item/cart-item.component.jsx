import React from "react";
// styled components
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <span>{name}</span>
                <span>
                    {quantity} * {price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
