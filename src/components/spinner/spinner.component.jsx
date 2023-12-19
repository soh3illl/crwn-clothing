import React from "react";
// styled components
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles.jsx";

const Spinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    );
};

export default Spinner;
