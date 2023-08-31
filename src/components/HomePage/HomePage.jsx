import React from "react";
import { allStyles } from "../../styles/allStyles";
import { FocusHome } from "./FocusHome";
import { SliderHome } from "./SliderHome";
import { NewsHome } from "./NewsHome";

export const HomePage = () => {
    const styles = allStyles.homePageStyles.homePage;

    return (
        <div className={styles.homeComp}>
            <FocusHome />
            <NewsHome/>
            <SliderHome/>
        </div>
    );
};
