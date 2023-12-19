import { getProductsWithCategories } from "../../utils/supabase.utils.js";
import {
    fetchCategoriesFailed,
    fetchCategoriesStart,
    fetchCategoriesSuccess,
} from "./categories.reducer.js";

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getProductsWithCategories();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
};
