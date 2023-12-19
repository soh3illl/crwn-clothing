import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer.js";
// components
import Button from "../button/button.component";
// styled components
import {
    Footer,
    Name,
    Price,
    ProductCardContainer,
} from "./product-card.styles";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    // eslint-disable-next-line react/prop-types
    const { imageUrl, name, price } = product;

    const addItemHandler = () => {
        dispatch(addItemToCart(product));
    };

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt="" />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType="inverted" onClick={addItemHandler}>
                Add to cart
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
