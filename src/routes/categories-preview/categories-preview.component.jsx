import React, { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
// components
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategories } from "../../store/categories/categories.selector.js";
// styles

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);

    return (
        <Fragment>
            {categories.map((category) => {
                const { id, title, products } = category;

                return (
                    <CategoryPreview
                        key={id}
                        title={title}
                        products={products}
                    />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;
