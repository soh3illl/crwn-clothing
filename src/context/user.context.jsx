import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser: payload,
            };
            break;

        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
            break;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    };

    const value = { currentUser, setCurrentUser };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
