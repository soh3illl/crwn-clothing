import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/user/user.reducer.js";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
// components
import { Outlet } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg?react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
// styled components
import {
    LogoContainer,
    NavigationContainer,
    NavLink,
    NavLinksContainer,
} from "./navigation.styles";
// utils
import { singOutAuthUser } from "../../utils/supabase.utils";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const signOut = async () => {
        await singOutAuthUser();
        dispatch(setCurrentUser(null));
    };

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOut}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
