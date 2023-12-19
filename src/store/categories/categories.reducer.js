import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    categoriesMap: [],
    isLoading: false,
    error: null,
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        fetchCategoriesStart(state) {
            state.isLoading = true;
        },
        fetchCategoriesSuccess(state, action) {
            state.isLoading = false;
            state.categoriesMap = action.payload;
        },
        fetchCategoriesFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCategoriesStart,
    fetchCategoriesFailed,
    fetchCategoriesSuccess,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
