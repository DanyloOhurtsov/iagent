import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";

export const BestHome = ({ value: {dataText} }) => {
    const bestData = dataText.homePageData.bestData;
    const styles = allStyles.allPagesStyles.homePageStyles.bestHome;

    return (
        <div className={styles.bestHomeComp}>
            <div className={styles.titleBestHome}>
                <h2>{bestData.text.title}</h2>
            </div>
            <h3 className={styles.subtitleBest}>{bestData.text.text}</h3>
            <div className={styles.contentBestHome}>
                {bestData.content.map((item)=>(
                    <Card key={item.id} value={{item}}/>
                ))}
            </div>
        </div>
    );
};
