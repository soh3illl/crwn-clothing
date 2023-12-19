import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer.js";

import { Route, Routes } from "react-router-dom";

// components
import Navigation from "./routes/navigation/navigation.component";
import Spinner from "./components/spinner/spinner.component.jsx";

import { getAuthUser } from "./utils/supabase.utils";
import { fetchCategoriesAsync } from "./store/categories/categories.action.js";

const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Authentication = lazy(() =>
    import("./routes/authentication/authentication.component"),
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getUser() {
            const user = await getAuthUser();
            dispatch(setCurrentUser(user));
        }

        getUser();
    }, []);

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="/shop/*" element={<Shop />} />
                    <Route path="/auth" element={<Authentication />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
