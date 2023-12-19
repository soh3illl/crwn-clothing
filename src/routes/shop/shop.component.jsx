import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// componets
import Spinner from "../../components/spinner/spinner.component.jsx";

const CategoriesPreview = lazy(() =>
    import("../categories-preview/categories-preview.component"),
);
const Category = lazy(() => import("../category/category.component"));

const Shop = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
        </Suspense>
    );
};

export default Shop;
