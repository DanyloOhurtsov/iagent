import React, { useState } from "react";
import { allStyles } from "../../styles/allStyles";
import { allImages } from "../../images/allImages";
import { dataForTest } from "../../data/infoForTest";

export const SliderHome = () => {
    const dataForSlider = dataForTest.sliderData;
    const styles = allStyles.homePageStyles.sliderHome;
    console.log(dataForSlider);

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % dataForSlider.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide - 1 + dataForSlider.length) % dataForSlider.length
        );
    };

    return (
        <div className={styles.sliderComp}>
            {dataForSlider.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${
                        index === currentSlide ? styles.active : ""
                    }`}
                    style={{ backgroundColor: slide.background }}
                >
                    <div className={styles.slideImage}>
                        <img src={slide.image} alt={`Slide ${index}`} />
                    </div>
                    <div className={styles.slideText}>
                        <div className={styles.insideText}>
                            <p className={styles.titleSlide}>{slide.title}</p>
                            <p className={styles.descSlide}>{slide.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
            <button className={styles.prevButton} onClick={prevSlide}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className={styles.nextButton} onClick={nextSlide}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
};
