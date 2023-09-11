import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { NewsComp } from "./NewsComp.jsx";
import {CommentsComp} from './CommentsComp.jsx'

export const NewsPage = ({ value: dataText }) => {
    const styles = allStyles.allPagesStyles.newsPageStyles.newsPage;

    return (
        <div className={styles.newsPageComp}>
            <NewsComp value={{ dataText }} />
            <CommentsComp value={{ dataText }} />
        </div>
    );
};
