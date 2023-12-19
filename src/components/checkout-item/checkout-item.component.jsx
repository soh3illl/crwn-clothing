import React from "react";
import { useDispatch } from "react-redux";
import {
    addItemToCart,
    deleteProductFromCart,
    removeItemFromCart,
} from "../../store/cart/cart.reducer.js";
// styled components
import {
    Arrow,
    BaseSpan,
    CheckOutItemContainer,
    ImageContainer,
    Quantity,
    RemoveButton,
    Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { imageUrl, name, price, quantity } = cartItem;

    const deleteHandler = () => dispatch(deleteProductFromCart(cartItem));

    const incrementQuantityHandler = () => dispatch(addItemToCart(cartItem));

    const decrementQuantityHandler = () =>
        dispatch(removeItemFromCart(cartItem));

    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={decrementQuantityHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={incrementQuantityHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={deleteHandler}>&#10005;</RemoveButton>
        </CheckOutItemContainer>
    );
};

export default CheckoutItem;
