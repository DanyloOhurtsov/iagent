import React from "react";
import { allStyles } from "../../../styles/allStyles";

export const NewsComp = ({ value: { images, dataText } }) => {
    const imagesNews = images.searchImg;
    const styles = allStyles.allPagesStyles.newsPageStyles.newsCompStyles;
    const dataNews = dataText.dataText.newsPageData.newsData;
    console.log(dataNews);
    return (
        <div className={styles.newsComp}>
            <div className={styles.titleNews}>
                <h2 className={styles.title2}>{dataNews.text.title}</h2>
            </div>
        </div>
    );
};
