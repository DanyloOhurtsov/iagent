import React, { useState } from "react";
import { allStyles } from "../../../styles/allStyles";
import { Card } from "../../Reuseable/Card";

export const CollectionHome = ({ value: { dataText } }) => {
    const maxItemsToShow = 12;
    const visibleItems = 3;
    const collectionData = dataText.homePageData.collectionData;
    const collectionContent = collectionData.content;
    let dataForCollectionSlider = [];

    const [activeButton, setActiveButton] = useState("Compra");
    const [currentIndex, setCurrentIndex] = useState(0);

    const styles = allStyles.allPagesStyles.homePageStyles.collectionHome;

    const updateActiveButton = (buttonName) => {
        setActiveButton(buttonName);
        setCurrentIndex(0);
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < dataForCollectionSlider.length - visibleItems) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const isPreviousDisabled = currentIndex === 0;
    const isNextDisabled =
        currentIndex === dataForCollectionSlider.length - visibleItems;

    if (activeButton === "Compra") {
        dataForCollectionSlider = collectionContent.Compra.slice(
            0,
            maxItemsToShow
        );
    } else if (activeButton === "Alquiler") {
        dataForCollectionSlider = collectionContent.Alquiler.slice(
            0,
            maxItemsToShow
        );
    }

    return (
        <div className={styles.collectionCompHome}>
            <div className={styles.titleCollectionHome}>
                <h2>{collectionData.text.title}</h2>
            </div>
            <div className={styles.controlCollectionHome}>
                <div className={styles.buttonsControlCollectionHome}>
                    {collectionData.text.buttons.map((item) => (
                        <button
                            key={item.id}
                            className={`${styles.buttonToggleNews} ${
                                activeButton === item.name ? styles.active : ""
                            }`}
                            onClick={() => updateActiveButton(item.name)}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
                <div className={styles.sliderControlCollectionHome}>
                    <button
                        className={styles.prevButton}
                        onClick={prevSlide}
                        disabled={isPreviousDisabled}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                        className={styles.nextButton}
                        onClick={nextSlide}
                        disabled={isNextDisabled}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className={styles.sliderCollectionHome}>
                <div className={styles.sliderWrapper}>
                    {dataForCollectionSlider
                        .slice(currentIndex, currentIndex + visibleItems)
                        .map((item) => (
                            <Card value={{ item }} key={item.id} />
                        ))}
                </div>
            </div>
        </div>
    );
};
