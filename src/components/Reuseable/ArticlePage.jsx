import React from "react";
import { allStyles } from "../../styles/allStyles";
import { Title2Comp } from "./Title2Comp";

export const ArticlePage = ({
    value: { dataNew, setCurrentPage, currentItem },
}) => {
    const styles = allStyles.reuseableStyles.articlePageStyles;
    return (
        <div className={styles.articlePage}>
            <button>
                <i class="fa-solid fa-arrow-left"></i>
            </button>
            <Title2Comp value={{ title: "SomeValue", color: "#f4f4f4" }} />
        </div>
    );
};
