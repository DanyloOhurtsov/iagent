import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";
import { allImages } from "../../../images/allImages";

export const FocusHome = ({ value: {dataText} }) => {
    // STYLES
    const styles = allStyles.allPagesStyles.homePageStyles.focusHome;
    // IMAGES
    const image = allImages.articleImages.focusImg;
    // FOCUS DATA
    const focusData = dataText.homePageData.focusData;
    const top5FocusData = focusData.content.slice(0, 3);

    return (
        <div className={styles.focusHomeComp}>
            <div className={styles.titleFocusHome}>
                <h2>{focusData.text.title}</h2>
            </div>
            <div className={styles.contentFocusHome}>
                <div className={styles.topRowFocusHome}>
                    <div className="imageTopRowFocusHome">
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.shareCardFocus}>
                        <p className={styles.titleInputsCard}>
                            {focusData.text.asideInfo.title}
                        </p>
                        <button>{focusData.text.asideInfo.buttonText}</button>
                    </div>
                </div>
                <div className={styles.cardsFocusHome}>
                    {top5FocusData.map((item) => (
                        <Card value={{ item }} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};
