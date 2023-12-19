import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categoriesMap,
);

export const selectCategoryIsLoading = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.isLoading,
);
