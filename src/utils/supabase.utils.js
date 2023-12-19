import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_APP_URL;
const key = import.meta.env.VITE_SUPABASE_APP_KEY;

export const supabase = createClient(url, key);

export const signInWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        console.error(error);
        return;
    }

    return data;
};

export const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
    });

    if (error) {
        console.error(error);
        throw new Error(error);
    }
};

export const singOutAuthUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        throw new Error(error);
    }
};

export const getAuthUser = async () => {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
};

export const createAuthUser = async (user) => {
    const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
            data: {
                name: user.name,
            },
        },
    });

    if (error) {
        if (error.message === "User already registered") {
            alert("This user has been registered already. Please try to login");
        }

        throw new Error(error);
    }

    return data;
};

export const getProductsWithCategories = async () => {
    const { data: products, error } = await supabase
        .from("categories")
        .select("*, products(*)");

    if (error) {
        throw new Error(error);
    }

    return products;
};
