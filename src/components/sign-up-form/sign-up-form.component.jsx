import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../store/user/user.reducer";
// components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
// styled components
import { SignUpContainer } from "./sign-up-form.styles";
// utils
import { createAuthUser } from "../../utils/supabase.utils";

const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const navigate = useNavigate();

    const { name, email, password, confirmPassword } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(name, email, password, confirmPassword);

        if (
            !name.length ||
            !email.length ||
            !password.length ||
            !confirmPassword.length
        ) {
            alert("all the inputes are required");
            return;
        }

        if (password.length < 6) {
            alert("password must be at least 6 character");
            return;
        }

        if (password !== confirmPassword) {
            alert("entered password are not same");
            return;
        }

        const { user } = await createAuthUser({ name, email, password });
        dispatch(setCurrentUser(user));
        navigate("/");
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
