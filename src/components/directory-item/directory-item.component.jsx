import React from "react";
import { useNavigate } from "react-router-dom";
// sytled components
import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
    Title,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(route);
    };

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage $imageUrl={imageUrl} />
            <Body>
                <Title>{title}</Title>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
