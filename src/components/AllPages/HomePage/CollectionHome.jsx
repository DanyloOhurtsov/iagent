import React, { useState } from "react";
import { allStyles } from "../../../styles/allStyles";

export const CollectionHome = ({ value: { dataText } }) => {
    // DATA
    const collectionData = dataText.homePageData.collectionData;
    const [activeButton, setActiveButton] = useState("Compra");
    let dataForCollectionSlider;
    if (activeButton === "Compra") {
        dataForCollectionSlider = collectionData.content.Compra;
    }
    if (activeButton === "Alquiler") {
        dataForCollectionSlider = collectionData.content.Alquiler;
    }

    // STYLES
    const styles = allStyles.allPagesStyles.homePageStyles.collectionHome;

    // SLIDER
    const visibleItems = 3
    // const [visibleItems, setVisibleItems] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < dataForCollectionSlider.length - visibleItems) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const isPreviousDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex === dataForCollectionSlider.length - 3;

    return (
        <div className={styles.collectionCompHome}>
            <div className={styles.titleCollectionHome}>
                <h2>{collectionData.text.title}</h2>
            </div>
            <div className={styles.controlCollectionHome}>
                <div className={styles.buttonsControlCollectionHome}>
                    {collectionData.text.buttons.map((item) => (
                        <button
                            className={`${styles.buttonToggleNews} ${
                                activeButton === item.name ? styles.active : ""
                            }`}
                            onClick={() => setActiveButton(item.name)}
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
                        .map((item, index) => (
                            <div
                                key={item.id}
                                className={styles.slideCollectionHome}
                            >
                                <div className={styles.imageCard}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={styles.textCard}>
                                    <div className={styles.dateInfo}>
                                        <p>{item.dateNumber}</p>
                                        <p>
                                            <i className="fa-regular fa-eye"></i>
                                            <span>{item.viewed}</span>
                                        </p>
                                    </div>
                                    <p className={styles.titleCard}>
                                        {item.title}
                                    </p>
                                    <p className={styles.descriptionCard}>
                                        {item.desc}
                                    </p>
                                    <div className={styles.linksCard}>
                                        <button>
                                            <i className="fa-solid fa-message"></i>
                                        </button>
                                        <button>
                                            <i className="fa-solid fa-share"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
