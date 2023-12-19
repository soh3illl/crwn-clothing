import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// // middlewares
import logger from "redux-logger";
//
const middlewares = [process.env.NODE_ENV === "development" && logger].filter(
    Boolean,
);

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middlewares),
});

export const persistor = persistStore(store);
