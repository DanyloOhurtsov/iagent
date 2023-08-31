import React from "react";
import { allStyles } from "../../styles/allStyles";
import { allImages } from "../../images/allImages";
import { FocusHome } from "./FocusHome";

export const HomePage = () => {
    const styles = allStyles.homePageStyles.homePage;

    return (
        <div className={styles.homeComp}>
            <FocusHome />
        </div>
    );
};
