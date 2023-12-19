import React from "react";
// components
import DirectoryItem from "../directory-item/directory-item.component";
// styled components
import { CategoriesContainer } from "./directory.styles";

const Directory = ({ categories }) => {
    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <DirectoryItem category={category} key={category.id} />
            ))}
        </CategoriesContainer>
    );
};

export default Directory;
