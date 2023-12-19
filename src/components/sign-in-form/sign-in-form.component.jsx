import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.reducer.js";
// components
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// styled components
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
// utils
import {
    signInWithEmailAndPassword,
    signInWithGoogle,
} from "../../utils/supabase.utils";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const navigate = useNavigate();

    const { email, password } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await signInWithEmailAndPassword(email, password);
        if (!data) {
            alert("Invalid login credentials");
            return;
        }

        dispatch(setCurrentUser(data.user));
        navigate("/");
    };

    return (
        <SignInContainer>
            <h2>Already have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        onClick={signInWithGoogle}
                        buttonType={BUTTON_TYPE_CLASSES.google}
                    >
                        google sign in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;
