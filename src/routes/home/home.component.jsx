import React from "react";
import {
    selectCategories,
    selectCategoryIsLoading,
} from "../../store/categories/categories.selector.js";
import { useSelector } from "react-redux";
// components
import Directory from "../../components/directory/directory.component";
import Spinner from "../../components/spinner/spinner.component.jsx";

const Home = () => {
    const categories = useSelector(selectCategories);
    const isLoading = useSelector(selectCategoryIsLoading);

    return isLoading ? <Spinner /> : <Directory categories={categories} />;
};

export default Home;
