import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    selectCategories,
    selectCategoryIsLoading,
} from "../../store/categories/categories.selector.js";
// components
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component.jsx";
// styled components
import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
    const { category: slug } = useParams();
    const categories = useSelector(selectCategories);
    const isLoading = useSelector(selectCategoryIsLoading);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const category = categories.find(
            (categoryItem) => categoryItem.title == slug,
        );

        setProducts(category?.products);
    }, [slug, categories]);

    return (
        <Fragment>
            <Title>{slug.toUpperCase()}</Title>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                </CategoryContainer>
            )}
        </Fragment>
    );
};

export default Category;
