import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { allImages } from "../../../images/allImages";
import {NewsComp} from './NewsComp.jsx'

export const NewsPage = ({ value: dataText }) => {
    const styles = allStyles.allPagesStyles.newsPageStyles.newsPage;
    const images = allImages.newsPageImg;
    return (
        <div className={styles.newsPageComp}>
            <NewsComp value={{ images, dataText }} />
        </div>
    );
};
