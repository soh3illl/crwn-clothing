import {createContext, useEffect, useState} from "react";

import {getProductsWithCategories} from "../utils/supabase.utils";

export const CategoriesContext = createContext({
    categories: [],
});

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const value = {categories};

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getProductsWithCategories();
            console.log(data);
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
