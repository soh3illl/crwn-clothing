import React from "react";
// components
import ProductCart from "../product-card/product-card.component";
import { Link } from "react-router-dom";
// styled components
import {
    CategoryPreviewContainer,
    Title,
    Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={`/shop/${title}`}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCart key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
