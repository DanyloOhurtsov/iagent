import React from "react";
import { allStyles } from "../../styles/allStyles";
import { FocusHome } from "./FocusHome";
import { SliderHome } from "./SliderHome";
import { NewsHome } from "./NewsHome";
import { BestHome } from "./BestHome";
import { CollectionHome } from "./CollectionHome";

export const HomePage = ({ value }) => {
    const { dataText } = value;
    const styles = allStyles.homePageStyles.homePage;

    return (
        <div className={styles.homeComp}>
            <FocusHome value={{ dataText }} />
            <NewsHome value={{ dataText }} />
            <SliderHome value={{ dataText }} />
            <CollectionHome value={{ dataText }} />
            <BestHome value={{ dataText }} />
        </div>
    );
};
